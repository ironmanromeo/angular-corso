const persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: "42"
}

const nome = persona.nome
const cognome=persona.cognome
const eta=persona.eta

console.log(nome)
console.log(cognome)
console.log(eta)

const cognome2=persona["cognome"]

const chiavi=Object.keys(persona);

const chiaveeta=chiavi[2];
const eta2=persona[chiaveeta];

