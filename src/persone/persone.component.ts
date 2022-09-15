import{Component} from "@angular/core"

@Component({
    selector:"persone",
    templateUrl:"./persone.component.html",
    styleUrls: ["./persone.component.css"]
})

export class PersoneComponent{
    nomePagina = "Persone component"
    disabilitato = true
    contatore = 0
    constructor(){
        setTimeout(()=>{
            this.disabilitato=false
        }, 1000)
    }
    incContatore(){
        alert("azione");
        this.contatore++;
    }
}