
import { ICharacter, IPageResponse } from '@interfaces/character.interface';
import { Observable } from 'rxjs';

export interface ICharacterRepository {
    getAllCharactersPerPage(page: number): Observable<IPageResponse>;
    getCharacterById(id: number): Observable<ICharacter>;
    getCharacterByName(name: string): Observable<IPageResponse>;
    getMultipleCharacters(list: number[]): Observable<ICharacter[]>;
}
