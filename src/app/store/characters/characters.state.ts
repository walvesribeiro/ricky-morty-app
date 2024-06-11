import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Select, Store } from '@ngxs/store';
import { CharactersAction } from './characters.actions';
import { ICharacter, IPageResponse } from '../../character.interface';
import { PaginationAction } from '../pagination/pagination.actions';
import { FavoritesState, FavoritesStateModel } from '../favorites/favorites.state';
import { Observable, tap } from 'rxjs';

export class CharactersStateModel {
  public characters!: ICharacter[];
}

export class ErrorStateModel {
  public error!: string;
}
const defaultsError = {
  error: ''
}
const defaults = {
  characters: []
};
@State<ErrorStateModel>({
  name: 'error',

})
@State<CharactersStateModel>({
  name: 'characters',
  defaults
})

@Injectable()
export class CharactersState {

  constructor(private store: Store) { }

  @Selector()
  static characters(state: CharactersStateModel) {
    return state.characters
  }

  @Selector()
  static error(state: ErrorStateModel) {
    return state.error
  }

  @Action(CharactersAction.AddCharacter)
  add({ getState, patchState, dispatch }: StateContext<CharactersStateModel>, { payload }: CharactersAction.AddCharacter) {
    const state = getState();
    const { info, results } = payload;
    const favorites = this.store.selectSnapshot(FavoritesState.favorites)
    results.filter((character) => favorites.filter(
      item => item.id === character.id && (character.favorite = item.favorite!)))

    dispatch(new PaginationAction(
      info
    ))
    patchState({ characters: [...state.characters, ...results] });
  }

  @Action(CharactersAction.UpdateCharacterList)
  update({ getState, setState, dispatch }: StateContext<CharactersStateModel>, { payload }: CharactersAction.UpdateCharacterList) {
    const state = getState();
    const { info, results } = payload;
    const favorites = this.store.selectSnapshot(FavoritesState.favorites)
    results.filter((character) => favorites.filter(
      item => item.id === character.id && (character.favorite = item.favorite!)))

    dispatch(new PaginationAction(
      info
    ))
    setState({ characters: [...results] });
  }

  @Action(CharactersAction.ErrorCharacter)
  error({ getState, setState }: StateContext<ErrorStateModel>, { error }: CharactersAction.ErrorCharacter) {
    console.log(error, 'da acion')
    setState({ error })
  }
}
