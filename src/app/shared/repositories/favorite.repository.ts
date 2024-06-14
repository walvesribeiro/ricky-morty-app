
import { ICharacter } from '@interfaces/character.interface';

export interface IFavoriteRepository {
    setFavorite(character: ICharacter): void;
    removeFavorite(character: ICharacter): void;
}
