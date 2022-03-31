//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

let numeriUtente, somma, istruzioni;
somma = 0;

let i = 0;
While(i < 10); {
    numeriUtente = parseInt(prompt('inserisci un numero'))
    somma += numeriUtente
    istruzioni = true
    i++
}

//stampo tutti i numeri
console.log(somma)