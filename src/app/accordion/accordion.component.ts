import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  animation = ""
  display = "none"

  constructor() { }

  apriBlocco(){
    
    if(this.display == "none"){
      this.display = "block"  
    }
    else{
      this.display = "none"
    }
    
    

  }

  ngOnInit(): void {
  }

}
