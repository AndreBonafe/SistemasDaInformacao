#include <stdio.h>

int main(void)
{
  printf("====================================\n");
  printf("       HAMBURGUERIA DIGITAL         \n");
  printf("====================================\n");
  printf("Bem-vindo a nossa hamburgueria!\n");
  printf("Aqui voce pode escolher seus lanches\n");
  printf("e acompanhar o valor total do pedido.\n");
  printf("Confira nosso cardapio a seguir!\n\n");

  int opcao = 0;
  double total = 0.0;

  do
  {
    printf("\n========== CARDAPIO DIGITAL ==========\n");
    printf("1 - X-Burger ........ R$ 18,00\n");
    printf("2 - X-Salada ........ R$ 22,00\n");
    printf("3 - Batata Frita .... R$ 12,00\n");
    printf("4 - Refrigerante .... R$  7,00\n");
    printf("5 - Finalizar pedido\n");
    printf("======================================\n");
    printf("Escolha uma opcao: ");

    scanf("%d", &opcao);

    switch (opcao)
    {
    case 1:
      total += 18.00;
      printf("X-Burger adicionado ao pedido!\n");
      break;

    case 2:
      total += 22.00;
      printf("X-Salada adicionado ao pedido!\n");
      break;

    case 3:
      total += 12.00;
      printf("Batata Frita adicionada ao pedido!\n");
      break;

    case 4:
      total += 7.00;
      printf("Refrigerante adicionado ao pedido!\n");
      break;

    case 5:
      printf("\nFinalizando pedido...\n");
      break;

    default:
      printf("Opcao invalida! Tente novamente.\n");
      break;
    }

  } while (opcao != 5);

  return 0;
}