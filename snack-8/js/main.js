//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

let chiedoNumero = prompt('inserisci un numero di 4 cifre')

let somma = 0

for (let i = 0; i < chiedoNumero.length; i++) {
    somma += Number(chiedoNumero[i]);
}
console.log(somma);