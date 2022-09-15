

const persona1 ={
    nome: "Renzo",
    cognome: "Tramaglino",
    eta: 20,
    indirizzo: "Via B.Crespi",
    citta: "Milano",
    nazione: "Italia",
}

//...
// ultimo parametro
// il nome per conversioen è rest

const { nome, cognome, eta, ...rest} = persona1

console.log("Qui oggetto persona1: ", persona1)