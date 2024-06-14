import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CharactersFacade } from '../../character.facade';

export interface ItemPagination {
  page: string, current: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [CharactersFacade]
})
export class HomeComponent implements OnInit {


  homeCharactersList$ = this.facadeService.characters$;
  pagination$ = this.facadeService.pagination$;
  onError$ = this.facadeService.onError$;
  search: FormControl = new FormControl();
  start: number = 0;
  end: number = 10;
  current: number = 1;
  constructor(
    @Inject(CharactersFacade) protected facadeService: CharactersFacade
  ) { }

  ngOnInit(): void {
    this.facadeService.getAllCharactersPerPage(1);
  }


  changePage({ page }: { page: string }) {
    return this.facadeService.getAllCharactersPerPage(page)
  }

}
