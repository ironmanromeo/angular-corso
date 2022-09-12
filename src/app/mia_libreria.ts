export class Bipede {
    piedi = 2
}

export class Persona extends Bipede{
    nome:string
    cognome:string
    eta:number

    constructor(nome:string,cognome:string,eta:number) {
        super()
        this.nome = nome
        this.cognome = cognome
        this.eta = eta
    }

    nomeCognome():string {
        return `${this.nome} ${this.cognome}`
    }
}

export class Componente {
    constructor(){
        const ref = document.getElementById("componente")
        if (!!ref) {
            ref.innerHTML = "<h5>Hello from Componente</h5>"
        }
    }
}

// fatta da me
// presa da libreria
export class SuperPagina{
    constructor() {
        console.log("Hello from SuperPagina")
    }

    supermetodo() {
        return "Cose meravigliose"
    }
}

export function logger(constructor:Function) {
    console.log("Decoratore logger")
}

type ParametriDecoratore = {
    selettore:string
    template:string
}

export function componenteDecoratore(parametri:ParametriDecoratore) {
    return function (costruttore:Function) {
        const ref = document.getElementById(parametri.selettore)
        if (!!ref) {
            ref.innerHTML = parametri.template
        }
    }
}
