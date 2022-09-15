<<<<<<< HEAD
import {Component} from "@angular/core"
import { AppModule } from "src/app/app.module"
=======
import { Component } from "@angular/core"
>>>>>>> origin/main

@Component({
    selector:"persone",
    templateUrl:"./persone.component.html",
    styleUrls:["./persone.component.css"]
})
<<<<<<< HEAD
export class PersoneComponent{
    nomePagina = "Persone Component"
    disabilitato = true
    contatore= 0
    constructor(){
        setTimeout(()=>{
            this.disabilitato= false
        },1000)
    } 
    incContatore(){
        this.contatore++
    }


=======
export class PersoneComponent {

    nomePagina = "Persone Component"
    disabilitato = true
    contatore = 0

    constructor() {
        setTimeout(() => {
            this.disabilitato = false
        }, 1000)
    }

    incContatore() {
        this.contatore++
    }

>>>>>>> origin/main
}