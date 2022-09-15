const persona1 = {
    nome: "Renzo",
    cognome: "Tramaglino",
    eta: 20,
    indirizzo: "Via B. Crespi",
    citta: "Milano",
    nazione: "Italia"
}

const persona2 = {
    nome: 3,
    cognome: "Tramaglino",
    eta: 20,
    indirizzo: "Via B. Crespi",
    citta: "Milano",
    nazione: "Italia"
}

// ...
// ultimo parametro
// il nome per convenzione è rest

const { nome, cognome, eta, ...rest } = persona1
const { indirizzo, citta } = rest

const nuovaPersona = {nome,cognome,eta}

console.log("Oggetto persona: ", persona1);
console.log("Oggetto persona: ", persona1);
