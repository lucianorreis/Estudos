#include <stdio.h>
#pragma region
/*
void main() {
    printf("O %s tem %i anos\n","Luciano", 20);
    printf("Seu peso atual é de %6.2fKg\n", 53.5); //Print só mostra strings
    printf("O seu sexo é %c", 'M');
}
#pragma endregion
*/
void main() {
    unsigned int idade = 33;
    float peso = 95.9;
    char sexo = 'M';
    char *nome = "Juvenal";

    printf("%s é do sexo %c, tem %i anos e pesa %.1fKG", nome, sexo, idade, peso);
}
/*
    Int[4] - short[2], long[8], signed, unsigned
        1835, 134, -18       ¦
    Float[4]
        4.5, 0.0075, -1.0893 ¦
    Char
        "Isso é um Char"     ¦
    Double[8]
        o dobro de Float
    Void
        valor vazio

*/
