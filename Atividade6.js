/*
6 – Ler valor de nota de N1 e N2 calcule a média e escrever a nota correspondente,
 al que 0 é a menor nota e 10 a maior, e imprimir o conceito equivalente
 (A, B, C, D ou E),conforme a seguinte tabela:

  A  -   Nota=>8,5 notas=<10
  B -   Nota=>7     notas<8,5
  C -   Nota=>5     notas<7
  D -   Nota=>3     notas<5
  E -   Nota>3
Nome Aluno: Letícia Calixto Diniz
*/
var teclado = require("prompt-sync")();
var N1 = parseFloat(teclado("Digite um valor para N1: "));
var N2 = parseFloat(teclado("Digite um valor para N2: "));
var media = (N1 + N2 / 2);
console.log("A nota corresponde a ".concat(media, "! "));
if (media >= 8.5 && media <= 10) {
    console.log("A nota equivale a \"A\"");
}
else if (media >= 7 && media < 8.5) {
    console.log("\u00C1 nota equivale a \"B\"");
}
else if (media >= 7 && media < 8.5) {
    console.log("\u00C1 nota equivale a \"C\"");
}
else if (media >= 7 && media < 8.5) {
    console.log("\u00C1 nota equivale a \"D\"");
}
else if (media >= 7 && media < 8.5) {
    console.log("\u00C1 nota equivale a \"E\"");
}
