import { Component, Input } from '@angular/core';
import { ICharacter } from '@interfaces/character.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!: ICharacter;

}
