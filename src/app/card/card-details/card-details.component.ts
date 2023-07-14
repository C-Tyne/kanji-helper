import { Component } from '@angular/core';

@Component({
  selector: 'card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {

  isFlipped = false;

  handleCardClick() {
    this.isFlipped = !this.isFlipped;
  }
}
