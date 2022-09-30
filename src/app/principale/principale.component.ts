import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css'],
  //encapsulation:ViewEncapsulation.None
})
export class PrincipaleComponent {

  mostraSubordinato?: Boolean = false

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.mostraSubordinato = !this.mostraSubordinato
  }

}
