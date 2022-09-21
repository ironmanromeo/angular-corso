import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  @Input("mioAlias") titolo: string = ""
  @Output() eventoCancella = new EventEmitter<string>()

  constructor() { }

  onCancellaPremuto(){
    this.eventoCancella.emit(this.titolo)
  }

  

  onSpara(n: Event){
    console.log(n)
  }

  getIsPippo(){
    return this.titolo === "Pippo" ? "E' Pippo!" : "nome"
  }

  ngOnInit(): void {
  }

}
