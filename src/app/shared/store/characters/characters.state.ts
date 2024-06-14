import { Injectable } from '@angular/core';
import { ICharacter } from '@interfaces/character.interface';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { FavoritesState } from '../favorites/favorites.state';
import { PaginationAction } from '../pagination/pagination.actions';
import { CharactersAction } from './characters.actions';

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
    const state = getState().characters;
    const { info, results } = payload;
    const favorites = this.store.selectSnapshot(FavoritesState.favorites)
    results.filter((character) => favorites.filter(
      item => item.id === character.id && (character.favorite = item.favorite!)))

    dispatch(new PaginationAction(
      info
    ))

    patchState({ characters: [...state, ...results] });
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
    setState({ error })
  }
}
