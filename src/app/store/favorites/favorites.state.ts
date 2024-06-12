import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { FavoritesAction } from './favorites.actions';
import { ICharacter } from '../../character.interface';

export class FavoritesStateModel {
  public favorites!: ICharacter[];
}

const defaults = {
  favorites: []
};

@State<FavoritesStateModel>({
  name: 'favorites',
  defaults
})
@Injectable()
export class FavoritesState {

  @Selector()
  static favorites(state: FavoritesStateModel): Partial<ICharacter>[] {
    return state.favorites
  }

  @Selector()
  static favoritesQuantity(state: FavoritesStateModel): number {
    return state.favorites.length
  }

  @Action(FavoritesAction.AddFavorite)
  add({ getState, patchState }: StateContext<FavoritesStateModel>, { payload }: FavoritesAction.AddFavorite) {
    const state: ICharacter[] = getState().favorites;
    if (state.indexOf(payload) > -1) return state;
    if (state.find((item) => item.id === payload.id)) return state;

    return patchState({ favorites: [...state, payload] });
  }

  @Action(FavoritesAction.RemoveFavorite)
  remove({ getState, setState }: StateContext<FavoritesStateModel>, { payload }: FavoritesAction.RemoveFavorite) {
    const state = getState();
    setState({ favorites: state.favorites.filter(item => item.id !== payload.id) });
  }
}


