import { Component,Input, OnInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-subordinato',
  templateUrl: './subordinato.component.html',
  styleUrls: ['./subordinato.component.css']
})
export class SubordinatoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() testo = ""

  constructor() {
    console.log("constructor ",this.testo);
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngonchanges", changes)
  }

  ngOnInit(): void {
    console.log("ngoninit", this.testo);
    
  }

  ngOnDestroy(): void{
    console.log("ngondestroy", this.testo)
  }


  checkTesto() :boolean{
    return this.testo === "Pippo"
  }
    

}
