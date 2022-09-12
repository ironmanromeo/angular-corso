type Persona = {
    nome: string,
    cognome: string,
    eta: number,
    nomeCognome: any
}

const persona1:Persona = {
    nome: "Renzo",
    cognome: "Tramaglino",
    eta: 20,
    nomeCognome(){
        return this.nome + " " + this.cognome
    }
}

console.log(persona1.nomeCognome())

const persona2:Persona = {
    nome: "Lucia",
    cognome: "Mondella",
    eta: 19,
    nomeCognome(){
        return this.nome + " " + this.cognome
    }
}


console.log(persona2.nomeCognome())

