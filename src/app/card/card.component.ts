import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.components.scss'],
})
export class CardComponent implements OnInit {

  @Input() card: Card = {title: '', text: ''};
  title: string = 'My card title';
  text: string = 'My sample text';
  textUnderline: string = 'none';


  ngOnInit() {
  }

  changeTitle() {
    this.card.title = 'title has been changed';
  }

  // inputHandler(value : any)  {
  //   this.title = value;
  // }

  changeHandler() {
    console.log(this.title);
  }
}
