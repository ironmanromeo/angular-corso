import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subordinato',
  templateUrl: './subordinato.component.html',
  styleUrls: ['./subordinato.component.css']
})
export class SubordinatoComponent implements OnInit {

  @Input() testo = ""

  constructor() {}

  ngOnInit(): void {
   
  }    

}
