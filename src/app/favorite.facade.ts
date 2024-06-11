import { Injectable } from "@angular/core";

import { Observable, map, of } from "rxjs";
import { ICharacter } from "./character.interface";
import { Select } from "@ngxs/store";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";
import { FavoritesState } from "./store/favorites/favorites.state";
import { FavoritesAction } from "./store/favorites/favorites.actions";

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