/*  
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. 
As perguntas são: 
    "Telefonou para a vítima?" 
    "Esteve no local do crime?" 
    "Mora perto da vítima?" 
    "Devia para a vítima?" 
    "Já trabalhou com a vítima?"  
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.
Se a pessoa responder positivamente a 2 questões ela deve ser classificada/exibida como 
"Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será
classificado como "Inocente". 
Nome:Leticia Calixto Diniz 
*/ 

console.clear();

const teclado = require(`prompt-sync`)();

let perguntaUm:number = parseFloat(teclado(`Digite se morava perto da vitima: `)); 
let perguntaDois:number = parseFloat(teclado(`Digite se esteve no local do cime: `));
let perguntaTres:number = parseFloat(teclado(`Digite se morava perto da vitima: `));
let perguntaQuatro:number = parseFloat(teclado(`Digite se devia para a vitima: `));
let perguntaCinco:number = parseFloat(teclado(`Digite se ja trabalhou para a vitima: `));

let respostas: number = 0;

if (perguntaUm == 1){
    respostas++;
}

if (perguntaDois == 1){
    respostas++;
}
if (perguntaTres == 1){
    respostas++;
}
if (perguntaQuatro == 1){
    respostas++;
}
if (perguntaCinco == 1){
    respostas++;;
}
if (respostas == 5){
console.log(`é o assasino!!`);
}
else if (respostas == 3 || respostas == 4){
    console.log(`é o cumplice do assassino!!`);
}
else if (respostas == 2){
        console.log(`é o suspeito!`);
 }
 else {
    console.log(`voce é inocente!!`)
}