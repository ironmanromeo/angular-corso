import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor() { }
  value="on"
  ngOnInit(): void {
  }

  onClick(){
    if(this.value="on"){
    this.value="off"
  }
  else{
    this.value="on"
  }
  }

}
