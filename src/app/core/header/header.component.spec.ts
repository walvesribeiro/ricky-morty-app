import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HeaderComponent, IMenuOptions } from './header.component';

describe('component: HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a header', () => {
    expect(component).toBeTruthy();
  });

  it('should have 0 options in header', () => {
    component.menuOptions = []
    fixture.detectChanges()

    expect(component.menuOptions).toEqual([]);
  });

  it('should have all options in header', () => {

    component.menuOptions = menuOptions
    fixture.detectChanges()

    expect(component.menuOptions).toEqual(menuOptions);
  });

});
