import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  titolo="miotitolo"
  stato=true
  constructor() { }

  ngOnInit(): void {
  }

  onPremuto(){
    alert("ho premuto l h3")
  }

}
