type Persona = {
    nome:string
    cognome:string
    eta:number
    nomecognome:Function
}

const persona1:Persona={
    nome: "Renzo",
    cognome: "Tramaglini",
    eta:20,
    nomecognome(){
        return this.nome + " " + this.cognome
    }
}

const persona2:Persona={
    nome: "Lucia",
    cognome: "Mondella",
    eta: 19,
    nomecognome(){
        return this.nome + " " + this.cognome
    }
}

console.log(persona1)
console.log(persona1.nomecognome())