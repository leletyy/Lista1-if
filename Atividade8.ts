/*
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o
triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que: 
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º) 
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º) 
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º) 
Nome: Letícia Calixto Diniz
*/

console.clear();

const teclado = require(`prompt-sync`)();

let T1: number = parseFloat(teclado(`Digite o angulo reto para T1: `));
let T2 : number = parseFloat(teclado(`Digite o angulo obtuso para T2: `));
let T3: number = parseFloat(teclado(`Digite o angulo agudo para T3: `));

if (T1 = T1){
    console.log (`O angulo é igual a 90º`);
}

else if (T1 < T2){
    console.log (`O angulo é maior que 90º`);
}

else if (T2 > T3){
    console.log (`O angulo é menor que 90º`);
}

console.log(`Algo deu errado!!`);