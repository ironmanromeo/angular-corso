import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nome = "Pippo" 
  @ViewChild("cittaRef") cittaRef?: ElementRef

  modificaNome(e: Event){
    const el = <HTMLInputElement>e.target
    this.nome = el.value
  }

  onMandaForm(input: HTMLInputElement, input1: HTMLInputElement){
    console.log(input.value)
    console.log(input1.value)
  }

  onMandaCitta(){
      console.log(this.cittaRef?.nativeElement.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
