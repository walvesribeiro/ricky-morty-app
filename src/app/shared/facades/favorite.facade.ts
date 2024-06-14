import { Injectable } from "@angular/core";

import { ICharacter } from "@interfaces/character.interface";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";
import { Select } from "@ngxs/store";
import { FavoritesAction } from "@store/favorites/favorites.actions";
import { FavoritesState } from "@store/favorites/favorites.state";

import { Observable } from "rxjs";


@Injectable()
export class FavoriteFacade {

    @Select(FavoritesState.favorites)
    favorites$!: Observable<ICharacter[]>;

    @Select(FavoritesState.favoritesQuantity)
    favoritesQuantity$!: Observable<number>;

    @Dispatch()
    setFavorite(character: ICharacter) {
        character.favorite = true
        return (new FavoritesAction.AddFavorite(character))
    }

    @Dispatch()
    removeFavorite(character: ICharacter) {
        character.favorite = false
        return new FavoritesAction.RemoveFavorite(character)
    }


}