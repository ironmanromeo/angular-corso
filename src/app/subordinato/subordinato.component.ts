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
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log(this.testo);
    
  }

  checkTesto() :boolean{
    return this.testo === "Pippo"
  }
    

}
