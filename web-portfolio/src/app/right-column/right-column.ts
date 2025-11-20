import { Component } from '@angular/core';
import { CptCarousel } from './cpt-carousel/cpt-carousel';
import { TextBio } from "./text-bio/text-bio";

@Component({
  selector: 'app-right-column',
  imports: [CptCarousel, TextBio],
  templateUrl: './right-column.html',
  styleUrl: './right-column.css',
})
export class RightColumn {

}
