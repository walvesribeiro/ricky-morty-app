import { IPageInfo } from "@interfaces/character.interface";

export class PaginationAction {
  static readonly type = '[Pagination] Update pagination';
  constructor(public payload: IPageInfo) { }
}
