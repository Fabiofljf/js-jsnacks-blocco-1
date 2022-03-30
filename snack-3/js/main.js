//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

let numeriUtente;

for (let i = 0; i < 10; i++) {
    numeriUtente = parseInt(prompt('inserisci un numero'))

    //stampo tutti i numeri
    console.log(numeriUtente)
}

//creo due categorie per sommare
const totNumeriPari = (numeriUtente % 2 == 0)
const totNumeridispari = (numeriUtente % 2 != 0)

const numeroTot = totNumeriPari + totNumeridispari
console.log(numeroTot)