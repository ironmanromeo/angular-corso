import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-subordinato',
  templateUrl: './subordinato.component.html',
  styleUrls: ['./subordinato.component.css']
})
export class SubordinatoComponent implements OnInit, OnDestroy, OnChanges {

  

  @Input() testo = "qualcosa"

  constructor() { 
    console.log(this.testo)
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges",this.testo)
  }
  ngOnDestroy(): void {
    console.log("OnDestroy",this.testo)
  }

  ngOnInit(): void {
    console.log(this.testo)
  }

}
