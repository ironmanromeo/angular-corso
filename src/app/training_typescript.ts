class Bipede{
    piedi = 2
}

class Persona extends Bipede {
    nome:string
    congome:string
    eta:number

    constructor(nome:string, cognome:string, eta:number){
        super()
        this.nome=nome
        this.congome=cognome
        this.eta=eta
    }

    nomeCognome():string{
        return `${this.nome}  ${this.congome} di anni ${this.eta}`
    }
}


const persona1= new Persona("Renzo","Tramaglino",20)
console.log(persona1.nomeCognome())