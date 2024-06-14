import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule, Store } from '@ngxs/store';
import { CharactersFacade } from '../../character.facade';
import { ContainerModule } from '../../container/container.module';
import { PaginationModule } from '../../pagination/pagination.module';
import { CharactersService } from '../../shared/services/characters.service';
import { HomeComponent } from './home.component';


describe('component: HomeComponent', () => {
  let component: HomeComponent;
  let mockCharacterService: CharactersFacade;
  let fixture: ComponentFixture<HomeComponent>;
  let store: Store;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule, NgxsModule.forRoot(), ContainerModule, ReactiveFormsModule, PaginationModule],
      providers: [CharactersService, CharactersFacade]
    })
      .compileComponents();
    await TestBed.createComponent(HomeComponent)


    store = TestBed.inject(Store);
    mockCharacterService = TestBed.inject(CharactersFacade);
    jest.spyOn(store, 'dispatch');
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a HomeComponent', () => {
    expect(component).toBeTruthy();
  });
});
