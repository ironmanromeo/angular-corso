const persona = {
    nome : "Mario",
    cognome : "Rossi",
    eta : 42
};

const nome = persona.nome
console.log(nome)
const cognome = persona["cognome"]
console.log(cognome)
const chiavi = Object.keys(persona)
console.log(persona)
const chiaveEta = chiavi[2]
const eta = persona[chiaveEta]
console.log(eta)