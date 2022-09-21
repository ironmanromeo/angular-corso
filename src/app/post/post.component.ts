import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input("ti") titolo = "Mio titolo"

  @Output() generaEvent= new EventEmitter<string>()
  constructor() { }
  onCancella(){
    this.generaEvent.emit(this.titolo)
  }
  onSpara(pippo:Event){
    console.log("bang",pippo)
  }
}
