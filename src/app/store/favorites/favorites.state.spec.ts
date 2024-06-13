import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ICharacter } from '../../character.interface';
import { FavoritesAction } from './favorites.actions';
import { FavoritesState } from './favorites.state';


const characterMock: ICharacter = {
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
} as ICharacter;

const charactersMock: ICharacter[] = [
  { ...characterMock },
  {
    ...characterMock,
    "id": 2,
  }
] as ICharacter[];


describe('Favorites actions', () => {
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([FavoritesState])]
    }).compileComponents();
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(store).toBeTruthy();
  });


  it('should create an empty state', () => {
    const actual = store.selectSnapshot(FavoritesState.favorites);
    expect(actual).toEqual([]);
  });

  it('should create an action and add an item', () => {
    store.dispatch(new FavoritesAction.AddFavorite(characterMock));
    const actual = store.selectSnapshot(FavoritesState.favorites);
    expect(actual).toContain(characterMock);
  });

  it('should remove a favorite', () => {

    store.dispatch(new FavoritesAction.AddFavorite(characterMock));
    store.dispatch(new FavoritesAction.RemoveFavorite(characterMock));
    const actual = store.selectSnapshot(FavoritesState.favorites);
    expect(actual).not.toContain(characterMock);
  });

  it('should return the quantity of favorites', () => {
    const characters: ICharacter[] = [...charactersMock];
    characters.forEach(character => store.dispatch(new FavoritesAction.AddFavorite(character)));
    const actual = store.selectSnapshot(FavoritesState.favoritesQuantity);
    expect(actual).toEqual(characters.length);
  });
});
