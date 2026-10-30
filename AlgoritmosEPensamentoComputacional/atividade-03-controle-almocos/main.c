
#include <stdio.h>

#define DIAS_SEMANA 7

int main(void)
{
  int almocos[DIAS_SEMANA];
  int total = 0;
  float media = 0.0f;

  const char *dias[DIAS_SEMANA] = {
      "Segunda-feira",
      "Terca-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sabado",
      "Domingo"
    };

  printf("====================================\n");
  printf("         CONTROLE DE ALMOCOS        \n");
  printf("====================================\n");
  printf("Informe a quantidade de almocos\n");
  printf("servidos em cada dia da semana.\n\n");

  // Leitura e validacao dos dados
  for (int i = 0; i < DIAS_SEMANA; i++)
  {
    int entradaValida = 0;

    while (!entradaValida)
    {
      printf("%s: ", dias[i]);

      if (scanf("%d", &almocos[i]) == 1 && almocos[i] >= 0)
      {
        entradaValida = 1;
      }
      else
      {
        printf("Valor invalido! Digite um numero inteiro positivo ou zero.\n");
      }

      // Descarta os caracteres restantes da linha
      int c;
      while ((c = getchar()) != '\n' && c != EOF)
      {
      }

      if (c == EOF && !entradaValida)
      {
        printf("Entrada encerrada.\n");
        return 1;
      }
    }
  }

  // Percorre o vetor e calcula o total semanal
  printf("\n========== RELATORIO SEMANAL ==========\n");

  for (int i = 0; i < DIAS_SEMANA; i++)
  {
    printf("%-15s : %d almocos\n", dias[i], almocos[i]);
    total += almocos[i];
  }

  // Bonus: calcula a media diaria
  media = (float)total / DIAS_SEMANA;

  printf("=======================================\n");
  printf("Total semanal: %d almocos\n", total);
  printf("Media diaria: %.2f almocos\n", media);
  printf("=======================================\n");

  printf("\nRelatorio finalizado com sucesso!\n");

  return 0;
}
