export class Bipede{
    piedi = 2
}

export class Persona extends Bipede {
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
//Presa da libreria
export class Componente{

    constructor(){
        const ref = document.getElementById("componente")
        if(ref){
            ref.innerHTML="<h5>Hello from Componente</h5>"
        } 
    }
}
//fatta da me
export class Superpagina {
    constructor(){
        console.log("Hello from the superpagina")
    }

    superMetodo():string{
        return "Cose meravigliose"
    }

}

export function Logger(constructor:Function){
    console.log("Decoratore")
}

type ParametriDecoratore = {
    selettore : string
    template : string
}

export function ComponenteDecoratore(parametri:ParametriDecoratore){
    return function(costruttore:Function){
        const ref = document.getElementById(parametri.selettore)
        if(ref){
            ref.innerHTML=parametri.template
        }
    }
}