import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-subordinato',
  templateUrl: './subordinato.component.html',
  styleUrls: ['./subordinato.component.css'],
})
export class SubordinatoComponent implements OnInit, OnDestroy, OnChanges{

  @Input() testo?:string

  constructor() {
    console.log("constuctor: ", this.testo)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges; ", changes);

    }

  ngOnInit(): void {
    console.log("ngOnInit: ", this.testo)
  }

  checkTesto(): boolean {
    return this.testo === "Pippo"
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy: ", this.testo)
  }
}
