import { setupTestingRouterInternal } from "@angular/router/testing"

export class Bipede{
    piedi=2
}

export class Persona extends Bipede{
    nome:string
    cognome: string
    eta:number
    constructor(nome:string, cognome:string, eta:number){
        super()
        this.nome=nome
        this.cognome=cognome
        this.eta=eta
    }

    nomeCognome(){
        return `Nome: ${this.nome}, Cognome: ${this.cognome} di anni ${this.eta}`
    }
}

export class Componente{
    constructor(){
        const contenitore=document.getElementById("componente");
        if(contenitore)
        contenitore.innerHTML="<h3>ciao</h3>";
    }
}

export class SuperPagina extends Componente{
    constructor(){
        super();
        console.log("IM A SUPERPIPPO")
    }
    supermetodo(){
        return "pioli"
    }
}
export function Logger(constructor:Function){
    console.log("decoratore")
}

type ParametriDecotrator={
    selettore:string
    template:string
}

export function ComponenteDecorator(parametri:ParametriDecotrator){
    return function (costruttore:Function){
    const ref = document.getElementById("componente")
    if (ref)
        ref.innerHTML="<p>HEllow ComponenteDecorator</p>"
    }
}