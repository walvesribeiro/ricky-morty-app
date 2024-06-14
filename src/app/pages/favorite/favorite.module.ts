import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerModule } from '@core/container/container.module';
import { FavoriteComponent } from './favorite.component';


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
