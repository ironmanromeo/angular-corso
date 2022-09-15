

const persona1= {
    nome: "Renzo",
    cognome: "Tramaglino",
    eta: 20,
    indirizzo: "via B.crespi",
    città: "Milano",
    nazione: "Italia"
}

//...
//ultimo parametro
//il nome per convinzione è rest

const {
    nome, 
    cognome, 
    eta,
    ...rest} =persona1

console.log(persona1)
console.log(rest)