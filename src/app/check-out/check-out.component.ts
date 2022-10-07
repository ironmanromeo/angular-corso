import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  disabilitato = true

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(ngform: NgForm){
    console.log(ngform);
    
  }

  controllaValori(){
    
  }

}
