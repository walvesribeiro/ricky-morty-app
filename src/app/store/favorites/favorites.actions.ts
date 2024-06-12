import { ICharacter } from "../../character.interface";

export namespace FavoritesAction {

  export class AddFavorite {
    static readonly type = '[Favorites] Add item';
    constructor(public payload: ICharacter) { }
  }

  export class RemoveFavorite {
    static readonly type = '[Favorites] Remove item';
    constructor(public payload: ICharacter) { }
  }
}
