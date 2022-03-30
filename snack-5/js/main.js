//Crea un array vuoto.
const list = new Array()

//Chiedi per 6 volte all’ utente di inserire un numero
//variabile
let numeroUser, confronta, addNumber;


for (let i = 0; i < 6; i++) {
    numeroUser = parseInt(prompt('inserisci un numero'))

    // Numeri dispari
    if (numeroUser % 2 != 0) {
        confronta = true
        addNumber = numeroUser
        list.push(addNumber)
    }
}

console.log(list)


//numeri dispari

//se è dispari inseriscilo nell’ array.