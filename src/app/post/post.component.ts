import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent {

  @Input("ti") titolo = "Mio titolo"
  @Output() generaEvento = new EventEmitter<string>()

  testo = "Mio Testo"

  constructor() { }

  onCancella() {
    this.generaEvento.emit(this.titolo)
  }
  
}
