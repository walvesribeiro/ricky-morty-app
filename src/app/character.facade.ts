import { Injectable } from "@angular/core";
import { CharactersService } from "./characters.service";

import { Observable, catchError, map, of, switchMap, tap } from "rxjs";
import { IPageResponse, ICharacter, IPageInfo } from "./character.interface";
import { CharactersAction } from "./store/characters/characters.actions";
import { CharactersState } from "./store/characters/characters.state";
import { Select } from "@ngxs/store";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";
import { PaginationAction } from "./store/pagination/pagination.actions";
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
            map(
                (item) => (
                    new CharactersAction.UpdateCharacterList(item))
            ),
            catchError(error => {
                console.log({ erro: error })
                throw new CharactersAction.ErrorCharacter(error)
            })
        )

    }

    @Dispatch()
    getCharacterByName(name: string) {
        return this.characterSevice.getCharacterByName(name).pipe(
            map(
                ({ info, results }) => (
                    new CharactersAction.UpdateCharacterList({ info, results })),

            ),
            catchError(({ error }) => {
                return of(new CharactersAction.ErrorCharacter({ error }.error))
            },
            )

        )



    }

}