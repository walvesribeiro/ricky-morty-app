import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { PaginationState } from './pagination.state';

describe('Pagination actions', () => {
  let store: Store;

  beforeEach(async () => {
    void TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([PaginationState])]
    }).compileComponents();
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(store).toBeTruthy();
  });

});
