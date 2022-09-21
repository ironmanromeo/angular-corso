import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {

  @Input("ti") titolo = "Mio titolo"

  @Output() generaEvento = new EventEmitter<string>()

  constructor() { }

  onCanella(){
    this.generaEvento.emit(this.titolo)
  }
  onSpara(valore : Event){
    console.log(valore)
  }
}
