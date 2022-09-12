class Persona {
    nome:string
    cognome:string
    eta:number

    constructor(nome:string,cognome:string,eta:number) {
        this.nome = nome
        this.cognome = cognome
        this.eta = eta
    }

    nomeCognome():string {
        return `${this.nome} ${this.cognome}`
    }
}

const persona1 = new Persona("Renzo","Tramaglino",20)
const persona2 = new Persona("Lucia","Mondella",19)

console.log(persona1,persona1.nomeCognome())
console.log(persona2,persona2.nomeCognome())
