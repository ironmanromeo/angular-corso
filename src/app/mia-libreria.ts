export class Bipede{
    piedi=2
}


export class Persona extends Bipede{

    nome:string
    cognome:string
    eta:number

    constructor(nome:string,cognome:string,eta:number){
        super()
        this.nome=nome
        this.cognome=cognome
        this.eta=eta
    }


    nomeCognome(){
        return `Nome: ${this.nome}, Cognome: ${this.cognome}, di anni ${this.eta}`
    }
}


export class Componente{

    constructor(){
        const ref=document.getElementById("componente")
        if(ref){
            ref.innerHTML="<h5>Hello from Componente</h5>"
        }

    }
}
export class SuperPagina{

    constructor(){
        console.log("Hello from super pagina")
    }
    
    superMetodo(){
        return "Cose meravigliose"
    }
}
export function Logger(constructor: Function){
    console.log("Decoratore logger")
}

type ParametriDecorator={
    selettore:string,
    template:string

}
export function ComponenteDecoratore(parametri:ParametriDecorator){
    return function (costruttore:Function){
        const ref=document.getElementById(parametri.selettore)
        if(ref){
            ref.innerHTML=parametri.template
    }
}
}