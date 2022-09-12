<<<<<<< HEAD
import { Component } from "@angular/core";
=======
import { Component } from "@angular/core"
>>>>>>> origin/main

@Component({
    selector:"persone",
    templateUrl:"./persone.component.html",
    styleUrls:["./persone.component.css"]
})
<<<<<<< HEAD
export class PersoneComponent
{
=======
export class PersoneComponent {

>>>>>>> origin/main
    nomePagina = "Persone Component"
    disabilitato = true
    contatore = 0

    constructor() {
        setTimeout(() => {
            this.disabilitato = false
        }, 1000)
    }

    incContatore() {
<<<<<<< HEAD
        //alert("Azione Botton")
        this.contatore = this.contatore + 10
=======
        this.contatore++
>>>>>>> origin/main
    }

}