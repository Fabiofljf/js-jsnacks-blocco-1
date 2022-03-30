//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//Arrey con i nomi degli invitati
const listaNomi = new Array('fabio', 'marco', 'peppe', 'lista', 'gino')

//Chiedo il nome all'utente
const nameUser = prompt('inserisci il tuo nome')

//variabile true

let entra = false

//Verifico
for (let i = 0; i <= listaNomi.length; i++) {
    if (nameUser == listaNomi[i]) {
        entra = true
    }
}

if (entra == true) {
    console.log('puoi entrare')
} else {
    console.log('non puoi entrare')
}