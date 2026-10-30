
#include <stdio.h>

int main(void) {
    int almocos[7];
    int total = 0;
    float media = 0.0f;

    printf("=================================\n");
    printf("       CONTROLE DE ALMOCOS       \n");
    printf("=================================\n");
    printf("Informe a quantidade de almocos\n");
    printf("servidos em cada dia da semana.\n\n");

    // Leitura dos dados
    for (int i = 0; i < 7; i++) {
        printf("Almocos servidos no dia %d: ", i + 1);
        scanf("%d", &almocos[i]);
    }

    return 0;
}
