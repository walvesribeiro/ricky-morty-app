import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { CharactersState } from './characters.state';
import { CharactersAction } from './characters.actions';

describe('Characters actions', () => {
  let store: Store;

  beforeEach(waitForAsync () => {
    void TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([CharactersState])]
    }).compileComponents();
    store = TestBed.inject(Store);
  }));

  it('should create', () => {
    expect(store).toBeTruthy();
  });

  it('should create an action and add an item', () => {
    store.dispatch(new CharactersAction('item-1'));
    store.select(state => state.characters.items).subscribe((items: string[]) => {
      expect(items).toEqual(jasmine.objectContaining([ 'item-1' ]));
    });
  });

});
