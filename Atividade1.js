/*
1 - Faça um programa que calcule e apresente o valor do volume de uma lata,
 sabendo que PI é um valor constante de 3.14159, o programa deve pedir os
 valores de RAIO e ALTURA, utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome:  Letícia Calixto Diniz
*/
var teclado = require("prompt-sync")();
var volume = parseFloat(teclado("Calcular volume da lata: "));
var raio = parseFloat(teclado("Digite o raio da lata: "));
var altura = parseFloat(teclado("Digite a alturra da lata: "));
;
var pi = 3.14159;
volume = pi * raio * 2 * altura;
console.log;
volume = parseFloat(teclado("Calcular volume da lata: "));
console.log;
raio = parseFloat(teclado("Digite o raio da lata: "));
console.log;
altura = parseFloat(teclado("Digite a altura da lata: "));
