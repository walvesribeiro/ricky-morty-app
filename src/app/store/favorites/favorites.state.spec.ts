import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { FavoritesState } from './favorites.state';
import { FavoritesAction } from './favorites.actions';

describe('Favorites actions', () => {
  let store: Store;

  beforeEach(waitForAsync () => {
    void TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([FavoritesState])]
    }).compileComponents();
    store = TestBed.inject(Store);
  }));

  it('should create', () => {
    expect(store).toBeTruthy();
  });

  it('should create an action and add an item', () => {
    store.dispatch(new FavoritesAction('item-1'));
    store.select(state => state.favorites.items).subscribe((items: string[]) => {
      expect(items).toEqual(jasmine.objectContaining([ 'item-1' ]));
    });
  });

});
