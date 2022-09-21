import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
<<<<<<< HEAD
  styleUrls: ['./post.component.css']
  //encapsulation:View
=======
  styleUrls: ['./post.component.css'],
  //encapsulation:ViewEncapsulation.None
>>>>>>> origin/main
})
export class PostComponent {

  @Input("ti") titolo = "Mio titolo"
  testo= "Mio testo"

  testo = "Mio testo"

  @Output() generaEvento = new EventEmitter<string>()

  constructor() { }

  onCancella() {
    this.generaEvento.emit(this.titolo)
  }

  onSpara(v:Event){
    console.log("onSpara",v)
  }

}
