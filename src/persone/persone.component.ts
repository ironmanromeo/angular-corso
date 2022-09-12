import { Component } from "@angular/core";

@Component({
    selector: "persone",
    templateUrl: "./persone.component.html",
    styleUrls: ["./persone.component.css"] 
})
export class PersoneComponent{

    nomePagina = "Persone Component"
    disabilitato = true
    contatore = 0

    constructor(){
        setTimeout(() => {
            this.disabilitato = false
        }, 3000)
    }
    
    incContatore(){
        this.contatore = this.contatore + 1
    }

}