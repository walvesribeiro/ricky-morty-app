import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IPageInfo } from '../../interfaces/character.interface';
import { PaginationAction } from './pagination.actions';

export class PaginationStateModel {
  public info!: Partial<IPageInfo>;
}

const defaults = {
  info: {}
};

@State<PaginationStateModel>({
  name: 'pagination',
  defaults
})
@Injectable()
export class PaginationState {

  @Selector()
  static info(state: PaginationStateModel) {
    if (state.info.pages! > 1) return state.info
    return
  }

  @Action(PaginationAction)
  add({ setState }: StateContext<PaginationStateModel>, { payload }: PaginationAction) {
    setState({ info: payload });
  }
}
