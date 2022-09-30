import { Component,Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-subordinato',
  templateUrl: './subordinato.component.html',
  styleUrls: ['./subordinato.component.css']
})
export class SubordinatoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() testo = ""

  constructor() {
    console.log(this.testo);
    
  }

  ngOnInit(): void {
    console.log(this.testo);
    
  }

  checkTesto() :boolean{
    return this.testo === "Pippo"
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy",this.testo)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges",this.testo)
  }
    

}
