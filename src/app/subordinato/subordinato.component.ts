import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-subordinato',
  templateUrl: './subordinato.component.html',
  styleUrls: ['./subordinato.component.css']
})
export class SubordinatoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() testo?:string
  

  constructor() { 
    console.log(this.testo)
  }

  ngOnInit(): void {
    console.log(this.testo)
  }

  ngOnDestroy(): void{
    console.log("ngOnDestroy" ,this.testo)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", this.testo);
    
  }

  checkTest(){
    return this.testo === "Pippo"
  }

}
