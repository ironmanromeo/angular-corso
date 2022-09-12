type Persona = {
    nome:string,
    cognome:string,
    eta:number
}

const persona1:any = {
    nome:"Renzo",
    cognome:"Tramaglino",
    eta:20,
    nomeCognome() {
        return this.nome + " " + this.cognome
    }
}

const persona2:any = {
    nome:"Lucia",
    cognome:"Mondella",
    eta:19,
    nomeCognome() {
        return this.nome + " " + this.cognome
    }
}

console.log(persona1.nomeCognome(),persona2.nomeCognome())
