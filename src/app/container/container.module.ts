import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';
import { ContainerComponent } from './container.component';





@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [ContainerComponent],
})
export class ContainerModule { }
