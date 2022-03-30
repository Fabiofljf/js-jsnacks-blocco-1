//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

for (let i = 0; i < 10; i++) {
    const numeriUtente = parseInt(prompt('inserisci un numero'))

    //stampo tutti i numeri
    console.log(numeriUtente)
}

//creo due categorie per sommare
const totNumeriPari = (numeriUtente[i] % 2 == 0)
const totNumeridispari = (numeriUtente[i] % 2 != 0)

const numeroTot = totNumeriPari + totNumeridispari
console.log(numeroTot)