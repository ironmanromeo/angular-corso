const eta = 32

type Persona = {
    nome: string,
    cognome: string,
    eta: number,
    nomeCognome:Function
}

const persona1:Persona = {
    nome: "Renzo",
    cognome: "Tramaglino",
    eta: 20,

    nomeCognome() {
        return this.nome + " " + this.cognome
    }
}

const persona2:Persona = {
    nome: "Lucian",
    cognome: "Mondella",
    eta: 19,

    nomeCognome() {
    return this.nome + " " + this.cognome
    }
}

console.log(persona1);
console.log(persona1.nomeCognome());
console.log(persona2);
console.log(persona2.nomeCognome());
