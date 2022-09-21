import { 
  Component, 
  Input, 
  Output, 
  EventEmitter 
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
  //encapsulation:View
})
export class PostComponent {

  @Input("ti") titolo = "Mio titolo"
  testo= "Mio testo"

  @Output() generaEvento = new EventEmitter<string>()

  constructor() { }

  onCancella() {
    this.generaEvento.emit(this.titolo)
  }

  onSpara(v:Event){
    console.log("onSpara",v)
  }

}
