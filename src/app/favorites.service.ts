import { Injectable } from '@angular/core';
import { IFavoriteRepository } from './favorite.repository';
import { ICharacter } from './character.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService implements IFavoriteRepository {

  constructor() { }
  setFavorite(character: ICharacter): void {
    throw new Error('Method not implemented.');
  }
  removeFavorite(character: ICharacter): void {
    throw new Error('Method not implemented.');
  }
}
