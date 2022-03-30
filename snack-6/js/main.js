//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.


const numeroUtente = parseInt(prompt('inserisci un numero'))

//VARIABILI
let numero = numeroUtente
let cubo;

cubo = numero * numero * numero;
console.log(cubo)