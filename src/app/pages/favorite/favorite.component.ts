import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteFacade } from '@facades/favorite.facade';
import { ICharacter } from '@interfaces/character.interface';
import { Observable } from 'rxjs';


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
