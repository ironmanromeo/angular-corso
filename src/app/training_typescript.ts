

const personal = {
    nome: "Renzo",
    cognome: "Tramaglino",
    eta: 20,
    indirizzo: "Via B.Crespi",
    citta: "Milano",
    nazione: "Italia"
}

const { nome, cognome, eta, ...rest } = personal

console.log("Qui ogetto perona ",personal)
console.log("Qui ogetto rest ",rest)