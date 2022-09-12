import { Component } from "@angular/core"

@Component({
    selector:"persone",
    templateUrl:"./persone.component.html",
    styleUrls:["./persone.component.css"]
})
export class PersoneComponent {
    nomePagina = "Persone Component"
    disabilitato=false
    constructor() {
        setTimeout(()=>{
            this.disabilitato = false
        }, 1000)
    }

    intContatore(){
        alert("azione bottone")
    }
}