import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-subordinato',
  templateUrl: './subordinato.component.html',
  styleUrls: ['./subordinato.component.css']
})
export class SubordinatoComponent implements OnInit, OnDestroy, OnChanges {
  @Input() contenuto : boolean = true
  constructor() {
    console.log("Costruttore ",this.contenuto)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges ",changes)
  }

  ngOnInit(): void {
    console.log("OnInit  ",this.contenuto)
  }

  ngOnDestroy():void{
    console.log("OnDestroy ",this.contenuto)
  }



}
