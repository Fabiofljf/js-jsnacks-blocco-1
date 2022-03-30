//L’utente inserisce due parole in successione, con due prompt. 
const primaParola = prompt('inserisci una parola')
const secondaParola = prompt('inserisci parola')

console.log(primaParola.length)
console.log(secondaParola.length)

if (primaParola.length > secondaParola.length) {
    console.log('la prima parola è più lunga')
} else if (primaParola.length < secondaParola.length) {
    console.log('la seconda parola è più lunga')
} else {
    console.log('le parole hanno la stessa lunghezza')
}

//Il software stampa prima la parola più corta, poi la parola più lunga.