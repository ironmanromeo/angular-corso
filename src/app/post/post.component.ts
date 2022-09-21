import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input("ti") titolo = "Mio titolo"
  @Output() generaEvento = new EventEmitter<string>()

  constructor() { 

  }

  onCancella() {
    this.generaEvento.emit(this.titolo)
  }

  onSpara(v:Event, sec?:string) {
    console.log("onSpara", v)
  }
}
