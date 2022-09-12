class Bipede {
    piedi = 2
    
}
class Persona extends Bipede {
    nome:string
    cognome:string
    eta:number

    constructor(nome:string, cognome:string, eta:number) {
        super()
        this.nome = nome
        this.cognome = cognome
        this.eta = eta
    }

    nomeCognome() {
        return `Nome: ${this.nome}, Cognome: ${this.cognome}, Età: ${this.eta}`
    }
}

const persona1 = new Persona("Renzo", "Tramaglino", 20)
const persona2 = new Persona("Lucia", "Mondella", 19)