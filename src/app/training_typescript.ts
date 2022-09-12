
class Bipede {
    piedi = 2
}

class Persona  extends Bipede{
    nome: string 
    cognome: string
    eta: number

    constructor(nome:string, cognome:string, eta:number) {
        super()
        this.nome= nome
        this.cognome= cognome
        this.eta= eta

    }

    nomeCognome(){
        return `Nome: ${this.nome}, Cognome: ${this.cognome} di anni ${this.eta}`
    }
}

const persona1= new Persona ("Renzo","Tramagliano",20)
const persona2= new Persona ("Lucua","Mondella",19)
