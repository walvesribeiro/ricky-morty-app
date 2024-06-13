import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { ContainerModule } from '../../container/container.module';
import { FavoriteFacade } from '../../favorite.facade';
import { FavoritesService } from '../../favorites.service';
import { FavoriteComponent } from './favorite.component';

describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteComponent],
      imports: [HttpClientTestingModule, NgxsModule.forRoot(), ContainerModule, ReactiveFormsModule],
      providers: [FavoritesService, FavoriteFacade]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
