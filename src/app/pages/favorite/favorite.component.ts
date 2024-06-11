import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from '../../character.interface';
import { FavoriteFacade } from '../../favorite.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
  providers: [FavoriteFacade]
})
export class FavoriteComponent {
  favorites$: Observable<ICharacter[]> = this.facadeService.favorites$;
  bagde$: Observable<number> = this.facadeService.favoritesQuantity$;


  constructor(
    @Inject(FavoriteFacade) protected facadeService: FavoriteFacade,
    private route: Router
  ) {
  }

  backToStart() {
    return this.route.navigate(['home'])
  }
}
