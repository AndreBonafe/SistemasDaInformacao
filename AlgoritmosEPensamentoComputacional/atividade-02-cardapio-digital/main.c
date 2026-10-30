#include <stdio.h>

int main(void) {
  printf("====================================\n");
  printf("       HAMBURGUERIA DIGITAL         \n");
  printf("====================================\n");
  printf("Bem-vindo a nossa hamburgueria!\n");
  printf("Aqui voce pode escolher seus lanches\n");
  printf("e acompanhar o valor total do pedido.\n");
  printf("Confira nosso cardapio a seguir!\n\n");


  int opcao = 0;

  do {
      printf("\n========== CARDAPIO DIGITAL ==========\n");
      printf("1 - X-Burger ........ R$ 18,00\n");
      printf("2 - X-Salada ........ R$ 22,00\n");
      printf("3 - Batata Frita .... R$ 12,00\n");
      printf("4 - Refrigerante .... R$  7,00\n");
      printf("5 - Finalizar pedido\n");
      printf("======================================\n");
      printf("Escolha uma opcao: ");

      scanf("%d", &opcao);

  } while (opcao != 5);


  return 0;
}