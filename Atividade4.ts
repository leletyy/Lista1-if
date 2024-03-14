/*  
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente. 
Nome :Letícia Calixto Diniz 
*/


console.clear();

const teclado = require(`prompt-sync`)();

let n1: number = parseFloat(teclado(`numeroMaior: `));
let n2: number = parseFloat(teclado(`numeroMediano: `));
let n3: number = parseFloat(teclado(`numeroMenor: `));

if (n1 > n2 && n1 > n3) {
    console.log(`numeroMaior = n1`);

    if (n2 > n3) {
        console.log(`numeroMediano = n2`);
        console.log(`numeroMenor = n3`);
    }
}
else if (n2 > n1 && n1 > n3) {
    console.log(`numeroMaior = n1`)
}
else if(n2 > n3) {

    console.log(`numeroMediano = n2`);
    console.log(`numero menor = n3`);
}
    
  else if(n3 > n1 && n3 > n2) {
}
else {
    console.log(`Algo deu errado!!`);
}

console.log(`Ordem crescente é ${n3}, ${n2}, ${n1}`);