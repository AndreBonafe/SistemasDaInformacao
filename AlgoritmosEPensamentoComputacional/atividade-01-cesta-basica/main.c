#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>
#include <math.h>

#define TOTAL_PRODUTOS 3
#define TAM_NOME 80
#define TAM_LINHA 256

typedef struct
{
  char nome[TAM_NOME];
  double preco_anterior;
  double preco_atual;
  double variacao;
  const char *situacao;
} Produto;

static int ler_linha(char *destino, size_t tamanho)
{
  if (fgets(destino, (int)tamanho, stdin) == NULL)
  {
    return 0;
  }

  size_t comprimento = strlen(destino);
  if (comprimento > 0 && destino[comprimento - 1] == '\n')
  {
    destino[comprimento - 1] = '\0';
  }
  else if (!feof(stdin))
  {
    int caractere;
    while ((caractere = getchar()) != '\n' && caractere != EOF)
    {
    }
    puts("Entrada muito longa. Tente novamente.");
    return -1;
  }
  return 1;
}

static int ler_nome(char *destino, size_t tamanho)
{
  char linha[TAM_LINHA];
  for (;;)
  {
    printf("Nome do produto: ");
    int status = ler_linha(linha, sizeof(linha));
    if (status == 0)
      return 0;
    if (status < 0)
      continue;
    if (linha[0] == '\0')
    {
      puts("O nome nao pode ficar vazio.");
      continue;
    }
    if (strlen(linha) >= tamanho)
    {
      printf("O nome deve ter no maximo %zu caracteres.\n", tamanho - 1);
      continue;
    }
    strcpy(destino, linha);
    return 1;
  }
}

static int ler_preco(const char *mensagem, double *preco, int exigir_positivo)
{
  char linha[TAM_LINHA];
  for (;;)
  {
    printf("%s", mensagem);
    int status = ler_linha(linha, sizeof(linha));
    if (status == 0)
      return 0;
    if (status < 0)
      continue;

    // Aceita ponto ou virgula como separador decimal.
    for (char *p = linha; *p != '\0'; ++p)
    {
      if (*p == ',')
        *p = '.';
    }

    errno = 0;
    char *fim;
    double valor = strtod(linha, &fim);
    while (*fim == ' ' || *fim == '\t')
      ++fim;

    if (fim == linha || *fim != '\0' || errno == ERANGE ||
        !isfinite(valor) || valor < 0.0 || (exigir_positivo && valor == 0.0))
    {
      puts(exigir_positivo
               ? "Preco invalido. Informe um numero maior que zero."
               : "Preco invalido. Informe um numero maior ou igual a zero.");
      continue;
    }
    *preco = valor;
    return 1;
  }
}

int main(void)
{
  Produto produtos[TOTAL_PRODUTOS];

  puts("========================================");
  puts("    MONITORAMENTO DA CESTA BASICA");
  puts("========================================");
  puts("Informe os precos de tres produtos para");
  puts("analisar a variacao em relacao ao mes anterior.\n");

  for (int i = 0; i < TOTAL_PRODUTOS; ++i)
  {
    printf("--- Produto %d de %d ---\n", i + 1, TOTAL_PRODUTOS);
    if (!ler_nome(produtos[i].nome, sizeof(produtos[i].nome)) ||
        !ler_preco("Preco do mes anterior (R$): ", &produtos[i].preco_anterior, 1) ||
        !ler_preco("Preco do mes atual (R$): ", &produtos[i].preco_atual, 0))
    {
      fputs("\nEntrada encerrada. Programa finalizado.\n", stderr);
      return 1;
    }

    produtos[i].variacao =
        (produtos[i].preco_atual - produtos[i].preco_anterior) /
        produtos[i].preco_anterior * 100.0;

    if (produtos[i].preco_atual > produtos[i].preco_anterior)
    {
      produtos[i].situacao = "AUMENTO";
    }
    else if (produtos[i].preco_atual < produtos[i].preco_anterior)
    {
      produtos[i].situacao = "QUEDA";
    }
    else
    {
      produtos[i].situacao = "ESTAVEL";
    }
    putchar('\n');
  }

  puts("========== RESULTADOS ==========");
  for (int i = 0; i < TOTAL_PRODUTOS; ++i)
  {
    printf("\nProduto %d: %s\n", i + 1, produtos[i].nome);
    printf("Preco anterior: R$ %.2f\n", produtos[i].preco_anterior);
    printf("Preco atual:    R$ %.2f\n", produtos[i].preco_atual);
    printf("Variacao:       %+.2f%%\n", produtos[i].variacao);
    printf("Situacao:       %s\n", produtos[i].situacao);
  }
  puts("\nMonitoramento concluido.");
  return 0;
}
