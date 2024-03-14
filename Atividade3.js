/*
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.
Nome Aluno: Letícia Calixto Diniz
*/
var teclado = require(" prompt-syn ")();
var letra = teclado("Digite alguma letra: ");
if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
    console.log("A letra digitada \u00E9 uma vogal !");
}
else {
    console.log("A letra digitada \u00E9 consoante!");
}
