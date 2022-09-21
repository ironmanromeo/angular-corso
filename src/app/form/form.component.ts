import {
    Component,
    ElementRef,
    ViewChild
} from "@angular/core"

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"],
})
export class FormComponent {

    @ViewChild("cittaRef") cittaRef?: ElementRef
    formLabel = "Form Title"

    onEditedInput(e: Event) {
        const myInput = <HTMLInputElement>e.target
        this.formLabel = myInput.value
      }

      onSendForm(input1: HTMLInputElement, input2: HTMLInputElement) {
        const persona = {
            nome: this.formLabel,
            cognome: input1.value,
            eta: 20,
            indirizzo: input2.value
        }
        console.log(persona);
      }

      onSendCity() {
        console.log(this.cittaRef?.nativeElement.value);
      }
}