import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { PaginationAction } from './pagination.actions';
import { IPageInfo } from '../../character.interface';

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
