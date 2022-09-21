import {
  Component,
  Input
} from "@angular/core"

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.css"],
})
export class AccordionComponent {
  @Input("accordionElementTitle") accordionElementTitle?: string

  open = false

  onShow() {
    if(this.open === false) {
      this.open = true
    } else {
      this.open = false
    }
  }
}