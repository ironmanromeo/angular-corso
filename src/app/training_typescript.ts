
const datiAnagrafici = {
  nome:"Renzo",
  cognome:"Travaglino",
  eta:32
}

const datiBiometrici = {
  pupilla:"marrone",
  altezza: 183
}
const persona1={...datiAnagrafici,...datiBiometrici}
console.log(persona1)
