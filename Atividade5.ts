/* 
5 – Faça um programa que o usuário digite dois números e o programa
 informe qual é o número maior, com a seguinte frase: `O número maior é ${variavel} e o número menor é ${variavel}`,
se ser iguais uma frase:  ` Os números ${variavel} e ${variavel} são iguais`. 
Nome: Letícia Calixto Diniz
*/ 
console.clear();

const teclado = require(`prompt-sync`)();

let n1 :number = parseFloat(teclado(`Digite a variavel: `));
let n2: number = parseFloat(teclado(`Digite a variavel: `));

if (n1 > n2){
 console.log(`O número é maior ${n1}`);
}
if (n1 < n2){
 console.log(`O número menor é ${n2} `);
}

else if (n1 = n2){

console.log(`São iguais!`);
}

console.log(`Algo deu errado!!`);