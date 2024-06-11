
import { Observable } from 'rxjs';
import { IPageResponse, ICharacter } from './character.interface';

export interface IFavoriteRepository {
    setFavorite(character: ICharacter): void;
    removeFavorite(character: ICharacter): void;
}
