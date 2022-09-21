import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  aperto=true
  @Input("t") titolo="ZAO"

  constructor() { }

  ngOnInit(): void {
  }
scompare(){
  this.aperto=!this.aperto
}
}
