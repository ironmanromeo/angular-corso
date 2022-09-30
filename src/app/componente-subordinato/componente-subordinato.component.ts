import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-subordinato',
  templateUrl: './componente-subordinato.component.html',
  styleUrls: ['./componente-subordinato.component.css']
})
export class ComponenteSubordinatoComponent implements OnInit {

  @Input() testo:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
