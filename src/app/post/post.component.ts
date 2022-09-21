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
})
export class PostComponent {

  @Input("ti") titolo = "Mio titolo"

  @Output() generaEvento = new EventEmitter<string>()

  constructor() { }

  onCancella(){
    alert("onCancella: "+this.titolo)
  }

  onSpara(v:string){
    console.log("onSpara",v)
  }

}
