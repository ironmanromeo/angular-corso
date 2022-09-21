import {
    Component,
    Input, 
    Output, 
    EventEmitter,
    ViewEncapsulation
} from "@angular/core"

@Component({
    selector: "app-post",
    templateUrl: "./post.component.html",
    styleUrls: ["./post.component.css"],
    encapsulation: ViewEncapsulation.None
})
export class PostComponent {
    @Input("ti") title = "Unknown"

    @Output() generateEvent = new EventEmitter<string>()

    constructor() {}

    onDelete() {
        this.generateEvent.emit(this.title)
    }

    onShoot(e: Event) {
        console.log(e.target)
      }
}