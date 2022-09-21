import {
    Component
} from "@angular/core"

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"],
})
export class FormComponent {
    formLabel = "Form Title"

    onEditedInput(e: Event) {
        const myInput = <HTMLInputElement>e.target
        this.formLabel = myInput.value
      }

      onSendForm(input1: HTMLInputElement, input2: HTMLInputElement) {
        console.log(input1.value,input2.value);
      }
}