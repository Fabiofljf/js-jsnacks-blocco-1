//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.


const numeroUtente = parseInt(prompt('inserisci un numero'))

//VARIABILI
let numero = numeroUtente
let cubo;

cubo = numero * numero * numero;
console.log(cubo)

//trovare il cubo del primi N numeri tipo se è 3 il numero scelto, stampare il cubo di 1 poi 2 e poi 3