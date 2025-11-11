import { Component, signal } from '@angular/core';
import { ProfilePicture } from './profile-picture/profile-picture';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProfilePicture],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('web-portfolio');
}
