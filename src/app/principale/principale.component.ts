import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit {

  mostrato: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  cambia(){
    if(this.mostrato)
      this.mostrato=false
    else
      this.mostrato=true
  }

}
