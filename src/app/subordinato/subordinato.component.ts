import { Component,Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-subordinato',
  templateUrl: './subordinato.component.html',
  styleUrls: ['./subordinato.component.css']
})
export class SubordinatoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() testo = ""

  constructor() {
    console.log("subordinato constructor", this.testo)
  }

  ngOnInit(): void {
   console.log("subordinato ngOnInit", this.testo)
  }

  ngOnDestroy(): void {
    console.log("subordinato ngOnDestroy", this.testo)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("subordinato ngOnChanges", changes)
  }

}
