const persona = {
  nome : "Mario",
  cognome : "Rossi",
  eta : 34,
  altezza :  200
}

const persona2 = {
  nome : "Mario",
  cognome : "Rossi",
  eta : 34,
}

const persone = [persona,persona2]

console.log(persone)

const calcolaNomi = (p1, p2)=>{
  return p1+p2
}

const dataStore = {
  nPersone : 10,
  persone,
  calcolaNomi
}


const altezza1 = dataStore?.persone?.[0]?.altezza ?? 0
console.log(altezza1)

const miaFunzione = dataStore?.calcolaNomi?.()
