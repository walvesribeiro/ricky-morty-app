import { IPageResponse } from "@interfaces/character.interface";

export namespace CharactersAction {

  export class AddCharacter {
    static readonly type = '[Characters] Add item';
    constructor(public payload: IPageResponse) { }
  }

  export class UpdateCharacterList {
    static readonly type = '[Characters] Update list item';
    constructor(public payload: IPageResponse) { }
  }

  export class ErrorCharacter {
    static readonly type = '[Characters] Error handle';
    constructor(public error: string) { }
  }

}
