/*
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o
triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome: Letícia Calixto Diniz
*/
console.clear();
var teclado = require("prompt-sync")();
var T1 = parseFloat(teclado("Digite o angulo reto para T1: "));
var T2 = parseFloat(teclado("Digite o angulo obtuso para T2: "));
var T3 = parseFloat(teclado("Digite o angulo agudo para T3: "));
if (T1 = T1) {
    console.log("O angulo \u00E9 igual a 90\u00BA");
}
else if (T1 < T2) {
    console.log("O angulo \u00E9 maior que 90\u00BA");
}
else if (T2 > T3) {
    console.log("O angulo \u00E9 menor que 90\u00BA");
}
console.log("Algo deu errado!!");
