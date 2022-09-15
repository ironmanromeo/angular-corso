

const persona1={
    nome:"Renzo",
    cognome: "Tramaglino",
    eta: 20,
    indirizzo: "Via b Crespi",
    citta :"milano",
    nazione: "italia"
}

//...
//ultimo parametro
//il nome per convenzione è rest
const {nome:nome1,cognome:cognome1,eta:eta1, ...rest } = persona1

console.log("Qui oggetto persona:", persona1)
console.log("Qui oggetto rest ", rest)

