
import { Observable } from 'rxjs';
import { IPageResponse, ICharacter } from './character.interface';

export interface ICharacterRepository {
    getAllCharactersPerPage(page: number): Observable<IPageResponse>;
    getCharacterById(id: number): Observable<ICharacter>;
    getCharacterByName(name: string): Observable<IPageResponse>;
    getMultipleCharacters(list: number[]): Observable<ICharacter[]>;
}
