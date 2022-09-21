<<<<<<< HEAD
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent {
  @Input("ti") titolo = "titolo post";

  constructor(){}
=======
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input("ti") titolo = "Mio titolo"

  constructor() { }
>>>>>>> origin/main

}
