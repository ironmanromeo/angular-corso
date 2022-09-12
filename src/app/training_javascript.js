const persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 42
}

const nome = persona.nome

const cognome = persona["cognome"]

const chiavi = Object.keys(persona)
const chiaveEta = chiavi[2]
const eta = persona[chiaveEta]

console.log(nome);
console.log(chiavi);
console.log(chiaveEta);
console.log(eta);