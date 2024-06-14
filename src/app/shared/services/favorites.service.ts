import { Injectable } from '@angular/core';
import { ICharacter } from '@interfaces/character.interface';
import { IFavoriteRepository } from '@repositories/favorite.repository';

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
