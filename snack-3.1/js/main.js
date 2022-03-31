//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

let numeriUtente, somma;
somma = 0;

let i = 1;
while (i <= 10); {
    numeriUtente = parseInt(prompt('inserisci un numero'))
    somma += numeriUtente
    i++
}

//stampo tutti i numeri
console.log(somma)