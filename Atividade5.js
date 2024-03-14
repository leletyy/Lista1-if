/*
5 – Faça um programa que o usuário digite dois números e o programa
 informe qual é o número maior, com a seguinte frase: `O número maior é ${variavel} e o número menor é ${variavel}`,
se ser iguais uma frase:  ` Os números ${variavel} e ${variavel} são iguais`.
Nome: Letícia Calixto Diniz
*/
console.clear();
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("Digite a variavel: "));
var n2 = parseFloat(teclado("Digite a variavel: "));
if (n1 > n2) {
    console.log("O n\u00FAmero \u00E9 maior ".concat(n1));
}
if (n1 < n2) {
    console.log("O n\u00FAmero menor \u00E9 ".concat(n2, " "));
}
else if (n1 = n2) {
    console.log("S\u00E3o iguais!");
}
console.log("Algo deu errado!!");
