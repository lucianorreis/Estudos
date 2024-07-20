#include <stdio.h>
#include <locale.h>

void main(){
    setlocale(LC_ALL, "Portuguese");
    printf("<< Especiais >>\n\n");
    printf("=-=-=-=-=-=-=-=-=-=-=-=-=\n");
    printf("`\a`\t=\tFaz Beep");
}

