import { Component } from '@angular/core';
import { IMenuOptions } from '@core/header/header.component';
import { FavoriteFacade } from '@facades/favorite.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [FavoriteFacade]
})
export class AppComponent {


  bagde$: Observable<number> = this.favoritefacade.favoritesQuantity$;
  menuOptions: IMenuOptions[] = [
    {
      icon: 'assets/icons/house-filled.svg',
      url: 'home',
      urlName: 'Início'
    },
    {
      icon: 'assets/icons/heart-filled.svg',
      url: '/favorites',
      urlName: 'Favoritos',
      badge: this.bagde$
    },
  ];

  constructor(readonly favoritefacade: FavoriteFacade) { }
}
