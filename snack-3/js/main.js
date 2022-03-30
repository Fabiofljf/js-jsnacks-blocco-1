//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

let numeriUtente, somma;
somma = 0

for (let i = 0; i < 10; i++) {
    numeriUtente = parseInt(prompt('inserisci un numero'))
    somma = somma + numeriUtente
}

//stampo tutti i numeri
console.log(somma)