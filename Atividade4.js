/*
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome :Letícia Calixto Diniz
*/
console.clear();
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("numeroMaior: "));
var n2 = parseFloat(teclado("numeroMediano: "));
var n3 = parseFloat(teclado("numeroMenor: "));
if (n1 > n2 && n1 > n3) {
    console.log("numeroMaior = n1");
    if (n2 > n3) {
        console.log("numeroMediano = n2");
        console.log("numeroMenor = n3");
    }
}
else if (n2 > n1 && n1 > n3) {
    console.log("numeroMaior = n1");
}
else if (n2 > n3) {
    console.log("numeroMediano = n2");
    console.log("numero menor = n3");
}
else if (n3 > n1 && n3 > n2) {
}
else {
    console.log("Algo deu errado!!");
}
console.log("Ordem crescente \u00E9 ".concat(n3, ", ").concat(n2, ", ").concat(n1));
