import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ICharacter, IPageResponse } from '../../character.interface';
import { FavoritesState } from '../favorites/favorites.state';
import { CharactersAction } from './characters.actions';
import { CharactersState } from './characters.state';

const responseMock: IPageResponse = {
  info: { count: 0, next: '', pages: 0, prev: '' },
  results: [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": 'Human',
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": ["https://rickandmortyapi.com/api/episode/1"],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": new Date(),
      favorite: true
    }] as ICharacter[]
}
let favorites;

describe('Characters actions', () => {
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([CharactersState, FavoritesState])]
    }).compileComponents();
    store = TestBed.inject(Store);
    favorites = store.selectSnapshot(FavoritesState.favorites)
  });

  it('should create', () => {
    expect(store).toBeTruthy();
  });

  it('should create an action and add an item', async () => {
    store.dispatch(new CharactersAction.AddCharacter(responseMock));
    let received;
    store.select(CharactersState.characters).subscribe(
      (item) => {
        received = item
        expect(received).toEqual(responseMock.results)
      }
    );
  });

  it('should create an action and update an item', async () => {
    await store.dispatch(new CharactersAction.UpdateCharacterList(responseMock));
    let received;
    store.select(CharactersState.characters).subscribe(
      (item) => {
        received = item
        expect(received).toEqual(responseMock.results)
      }
    );
  });

  it('should handle error', () => {
    const error = 'An error occurred';
    store.dispatch(new CharactersAction.ErrorCharacter(error));
    const actual = store.selectSnapshot(CharactersState.error);
    expect(actual).toEqual(error);
  });

});
