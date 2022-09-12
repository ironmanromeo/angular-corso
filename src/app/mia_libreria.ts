export class bipede{
    piedi = 2

}

export class Persona{

    nome:string
    cognome:string
    eta:number
    
    constructor(nome:string,cognome:string,eta:number){
        this.nome=nome
        this.cognome=cognome
        this.eta=eta
    }
    
    nomeCognome(){
        return `nome:${this.nome},cognome:${this.cognome},eta:${this.eta}`
    } 
    }
    

    export class Componente{
    
        constructor(){
          const ref = document.getElementById("componente")
          if (!!ref){
            ref.innerHTML = "<h5> Hello from Component </h5>" 
          }
        }
        }

        export class SuperPagina extends Componente{
    
            constructor(){
                super()
            console.log("Hello from superpagina");

            }
            SuperMetodo(){
                return "cose meravigliose"
            }
            }

            export function logger(constructor:Function){
            console.log("decoratore logger");

            }

            type ParametroDecoratore = {
                selettore:string
                template:string
            }

            export function ComponenteDecoratore(parameri:ParametroDecoratore){
                return function (costruttore:Function){
                const ref = document.getElementById("componente")
                if (!!ref){
                    ref.innerHTML = parameri.template
                  } 
                }
            }