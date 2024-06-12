import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { PaginationState } from './pagination.state';
import { PaginationAction } from './pagination.actions';

describe('Pagination actions', () => {
  let store: Store;

  beforeEach(waitForAsync () => {
    void TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([PaginationState])]
    }).compileComponents();
    store = TestBed.inject(Store);
  }));

  it('should create', () => {
    expect(store).toBeTruthy();
  });

  it('should create an action and add an item', () => {
    store.dispatch(new PaginationAction('item-1'));
    store.select(state => state.pagination.items).subscribe((items: string[]) => {
      expect(items).toEqual(jasmine.objectContaining([ 'item-1' ]));
    });
  });

});
