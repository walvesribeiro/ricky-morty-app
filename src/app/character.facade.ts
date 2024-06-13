import { Injectable } from "@angular/core";
import { CharactersService } from "./characters.service";

import { Dispatch } from "@ngxs-labs/dispatch-decorator";
import { Select } from "@ngxs/store";
import { Observable, catchError, exhaustMap, of } from "rxjs";
import { ICharacter, IPageInfo } from "./character.interface";
import { CharactersAction } from "./store/characters/characters.actions";
import { CharactersState } from "./store/characters/characters.state";
import { PaginationState } from "./store/pagination/pagination.state";

@Injectable()
export class CharactersFacade {

    @Select(CharactersState.characters)
    characters$!: Observable<ICharacter[]>;

    @Select(CharactersState.error)
    onError$!: Observable<string>;

    @Select(PaginationState.info)
    pagination$!: Observable<IPageInfo>;

    constructor(private characterSevice: CharactersService) { }

    @Dispatch()
    getAllCharactersPerPage(props?: string | number) {
        return this.characterSevice.getAllCharactersPerPage(props).pipe(
            exhaustMap(
                async (item) => await (
                    new CharactersAction.UpdateCharacterList(item))
            ),
            catchError(error => {
                throw new CharactersAction.ErrorCharacter(error)
            })
        )

    }

    @Dispatch()
    getCharacterByName(name: string) {
        return this.characterSevice.getCharacterByName(name).pipe(
            exhaustMap(
                async ({ info, results }) => await (
                    new CharactersAction.UpdateCharacterList({ info, results })),

            ),
            catchError(({ error }) => {
                return of(new CharactersAction.ErrorCharacter({ error }.error))
            },
            )
        )
    }
}