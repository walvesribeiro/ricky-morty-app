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

  createPageLinks(pages: number, next?: string, prev?: string) {
    let props = next?.split('?')[1] || prev?.split('?')[1];

    let urlArray: ItemPagination[] = [] as ItemPagination[];
    let urlStart = (props!.split('=')[0]);
    let urlEnd = (props?.split('&')[1]);
    for (let index = 0; index < pages; index++) {
      let page = '?' + urlStart + '=' + (index + 1);
      if (urlEnd) page.concat('&' + urlEnd)

      let urlObject = ({
        page,
        current: (index + 1)
      })
      urlArray.push(urlObject)
    }
    return urlArray
  }

  changePage(page: string, pages: number) {
    const numberPattern = /\d+/g;
    let props = page.split('?')[1]

    this.current = Number(props.match(numberPattern)![0])
    this.slicePaginationItem(this.current, pages);
    return this.facadeService.getAllCharactersPerPage(props)
  }

  slicePaginationItem(current: number, pages: number) {
    const numberPattern = /\d+/g;
    this.start = (Number(current) > 1 && Number(current) < pages)
      ? (this.start > current)
        ? ((pages - this.end) < 10)
          ? current : this.start : this.start + 1 : 0;


    this.end = (Number(current) > 1 && Number(current) < pages) ?
      (((pages > 10) && (this.end <= pages)) ?
        ((this.end - this.start) === 10 ?
          ((this.end < 10) ? pages : this.start + 1) : this.start + 10) : this.end + 1) : this.end;

  }


}
