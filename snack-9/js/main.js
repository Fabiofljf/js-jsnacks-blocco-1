//Calcola la somma e la media dei primi 10 numeri.

const numeri = [10, 5, 40]

let somma = 0
let media;

for (let i = 0; i < numeri.length; i++) {
    somma += (numeri[i])
    media = somma / numeri.length
}
console.log(somma)
console.log(media)