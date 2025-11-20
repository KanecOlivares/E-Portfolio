import { Component, signal } from '@angular/core';
import { ProfilePicture } from './profile-picture/profile-picture';
import { HeaderComponent } from "./header/header.component";
import { RightColumn } from './right-column/right-column';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProfilePicture, RightColumn],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('web-portfolio');
}
