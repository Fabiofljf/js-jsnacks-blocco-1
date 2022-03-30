//L’utente inserisce due numeri in successione, con due prompt. 

const primoNumero = prompt('Inserisci numero')
const secondoNumero = prompt('Inserisci numero')
console.log(primoNumero);
console.log(secondoNumero);

// Il software stampa il maggiore.
if (primoNumero > secondoNumero) {
    console.log(primoNumero)
} else if (primoNumero < secondoNumero) {
    console.log(secondoNumero)
} else {
    console.log('pareggio')
}