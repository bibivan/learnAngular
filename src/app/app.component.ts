import { Component } from '@angular/core';

export interface Card {
  title: string,
  text: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-Angular';
  toggle = true;

  cards: Card[] = [
    {title: 'Card 1', text: 'this is card number one'},
    {title: 'Card 2', text: 'this is card number two'},
    {title: 'Card 3', text: 'this is card number three'},
  ]


  toggleCards() {
    this.toggle = !this.toggle;
    // console.log(this.toggle);
  }
}
