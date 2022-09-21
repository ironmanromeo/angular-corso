import { EmitterVisitorContext } from '@angular/compiler';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input("ti") titolo = "Mio titolo"

  @Output() generaEvento = new EventEmitter<string>()

  constructor() { }

  onCancella() {
    this.generaEvento.emit(this.titolo)
  }

  onSpara(v:Event) {
    console.log(v)
  }

}
