

const persona1 = {
    nome: "Renzo",
    cognome: "Tramaglino",
    eta: 20,
    indirizzo: "Via B.Crespi",
    citta: "Milano",
    nazione: "Italia"

    
}

//...
//ultimo parametro
//il nome per conversione è rest

const { nome, cognome, eta, ...rest } = persona1

const nuovoOggetto = { nome,cognome, eta }

console.log("Qui oggetto persona1: ", persona1)
console.log("Qui oggetto rest: ", rest)