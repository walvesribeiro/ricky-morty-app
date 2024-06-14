import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IMenuOptions } from '@core/header/header.component';
import { HeaderModule } from '@core/header/header.module';
import { NgxsModule, Store } from '@ngxs/store';
import { FavoritesState } from '@store/favorites/favorites.state';
import { of } from 'rxjs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([FavoritesState]),
        RouterTestingModule,
        HeaderModule,

      ],
      declarations: [
        AppComponent
      ],
      // providers: [provideStore([FavoritesState])]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should create the menuOptions`, () => {
    const store: Store = TestBed.inject(Store);
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let badge$ = of(0)
    let menuOptions: IMenuOptions[] = [
      {
        icon: 'assets/icons/house-filled.svg',
        url: 'home',
        urlName: 'Início'
      },
      {
        icon: 'assets/icons/heart-filled.svg',
        url: '/favorites',
        urlName: 'Favoritos',
        badge: badge$
      },
    ];

    expect(app.menuOptions.values).toEqual(menuOptions.values);
  });

});

