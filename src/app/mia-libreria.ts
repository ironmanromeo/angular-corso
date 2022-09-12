export class Bipede{
    piedi=2
}

export class Persona extends Bipede{
    nome:string
    cognome:string
    eta:number
    
    constructor(nome:string,cognome:string,eta:number){
        super()
        this.nome=nome,
        this.cognome=cognome,
        this.eta=eta
    }

    NomeCognome(){
        return `Nome ${this.nome}, Cognome ${this.cognome} di anni ${this.eta}`
    }
}
//presa da libreria
export class Componente{
    constructor(){
        const ref = document.getElementById("componente")
        if(!!ref){
            ref.innerHTML = "<h5>Hello From Componente </h5>"
        }
    }
}
//fatta da me
export class superpagina{
    constructor(){
        
        console.log("Hello from super pagina")
    }
    superMetodo(){
        return "Cose meravigliose "
    }

}

//creo decoratore 

export function Logger(constructor:Function){
    console.log("Decoratore Logger")
}

type parametriDecoratore = {
    selettore:string,
    template:string
}

export function componentedecoratore(parametri:parametriDecoratore) {
    return function (costruttore:Function){
        const ref = document.getElementById(parametri.selettore)
        if(!!ref){
            ref.innerHTML = parametri.template
        }
    }
}