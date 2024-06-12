import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite.component';
import { RouterModule, Routes } from '@angular/router';
import { ContainerModule } from '../../container/container.module';


const routes: Routes = [
  {
    path: '',
    component: FavoriteComponent
  },
];
@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ContainerModule
  ]
})
export class FavoriteModule { }
