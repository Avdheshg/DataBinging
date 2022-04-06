
import {Component} from "@angular/core";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"]
})

export class ContactComponent {
    name: string = "";
    phone = "";
    email = "";
    isBtnActive = false; 

    saveName(event: Event) {
        this.name = (<HTMLInputElement>event.target).value;
        this.isBtnActive = true;
    }

    savePhone(event: Event) {
        this.phone = (<HTMLInputElement>event.target).value;
    }

    saveEmail(event: Event) {
        this.email = (<HTMLInputElement>event.target).value;
    }

    
     
}

