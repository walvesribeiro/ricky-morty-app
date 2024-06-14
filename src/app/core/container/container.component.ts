
import { debounceTime, distinctUntilChanged } from 'rxjs';



import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CharactersFacade } from '@facades/character.facade';
import { FavoriteFacade } from '@facades/favorite.facade';
import { ICharacter } from '@interfaces/character.interface';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [CharactersFacade, FavoriteFacade]
})
export class ContainerComponent implements OnInit {
  @Input() searchCharacterName?: FormControl;
  @Input() charactersList$!: Observable<ICharacter[]>;
  private readonly debounceTimeMiliseconds = 1000;


  constructor(
    private facade: CharactersFacade,
    private favoriteFacade: FavoriteFacade
  ) {
  }
  ngOnInit(): void {
    this.searchCharacterName?.valueChanges.pipe(
      debounceTime(this.debounceTimeMiliseconds),
      distinctUntilChanged()
    ).subscribe(
      () => this.getCharacterByName()
    )
  }

  // getCharacterById() {
  //   return this.facade.getCharacterById();
  // }
  getCharacterByName() {
    return this.facade.getCharacterByName(this.searchCharacterName?.value);
  }
  getAllCharactersPerPage() {
    return this.facade.getAllCharactersPerPage();
  }

  // getMultipleCharacters() {
  //   let list = [5, 6, 7];
  //   return this.facade.getMultipleCharacters(list);
  // }
  onAdd(favoriteItem: ICharacter) {
    return this.favoriteFacade.setFavorite(favoriteItem)
  }

  onRemove(favoriteItem: ICharacter) {
    return this.favoriteFacade.removeFavorite(favoriteItem)
  }

  toggleFavorite(character: ICharacter) {
    return !character.favorite ? this.onAdd(character) : this.onRemove(character);
  }
}
