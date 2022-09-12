export class Bipede{
    piedi=2
}

export class Persona extends Bipede{
    nome:string
    cognome:string
    eta:number

    constructor(nome:string, cognome:string, eta:number){
        super()
        this.nome=nome
        this.cognome=cognome
        this.eta=eta
    }

    nomecognome(){
        return `Nome: $(this.nome), Cognome: $(this.cognome), di anni $(this.eta)`
    }
}

export class componente{

    constructor(){
        const ref = document.getElementById("componente")
        if(ref){
            ref.innerHTML = "<h5> hello from Componente</h5>"
        }
    }
}

export class superpagina extends componente{

    constructor(){
        super()
        console.log("hello from superpagina")
    }

    supermetodo(){
        return "cose meravigliose"
    }
}

export function logger(constructor:Function) {
    console.log("decoratore logger")

}

type ParametriDecoratori={
    selettore:string
    template:string
}

export function ComponenteDecoratori(parametri:ParametriDecoratori){
    return function(constructor:Function) {
        const ref=document.getElementById(parametri.selettore)
        if(ref){
            ref.innerHTML = parametri.template
        }
    }
}