import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '@components/card/card.module';
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
