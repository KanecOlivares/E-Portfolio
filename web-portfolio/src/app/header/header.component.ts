import { Component  } from "@angular/core";

@Component({
    selector: 'app-header',
    standalone: true, // modern way  false for module based compnents
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent{

}