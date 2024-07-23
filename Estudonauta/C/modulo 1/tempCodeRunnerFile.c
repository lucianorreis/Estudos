#include <stdio.h>
/*
void main() {
    printf("O %s tem %i anos\n","Luciano", 20);
    printf("Seu peso atual é de %6.2fKg\n", 53.5); //Print só mostra strings
    printf("O seu sexo é %c", 'M');
}
*/
void main() {
    unsigned int idade = 33;
    float peso = 95.9;
    char sexo = 'M';
    char *nome = "Juvenal";

    printf("%s é do sexo %c, tem %i anos e pesa %.1fKG", nome, sexo, idade, peso);
}