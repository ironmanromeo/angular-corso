import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input("ti") titolo = "Mio titolo"
  nomeRandom = "Nessuno"

  constructor(){ }

  
}
