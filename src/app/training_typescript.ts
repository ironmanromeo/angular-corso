const persona1={
  nome : "Renzo",
  cognome : "Tramaglino",
  eta : 20,
  indirizzo : "Via B.Crespi",
  citta : "Milano",
  nazione : "Italia"
}

const {nome,cognome,eta, ...rest } = persona1

console.log(persona1,rest)
