/*  
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.   
Nome Aluno: Letícia Calixto Diniz
*/ 

const teclado = require (` prompt-syn `)();

let letra: string = teclado (`Digite alguma letra: `);

if (letra == `A`||letra == `E`||letra == `I`||letra == `O`||letra == `U`||letra == `a`||letra == `e`||letra == `i`||letra == `o`||letra == `u`){
   console.log (`A letra digitada é uma vogal !`);
}
else { 
    console.log(`A letra digitada é consoante!`)
}