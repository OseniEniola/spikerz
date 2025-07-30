import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyMediaComponent } from './blocks/lazy-media/lazy-media.component';



@NgModule({
  declarations: [LazyMediaComponent],
  imports: [
    CommonModule
  ],
  exports: [LazyMediaComponent,CommonModule]
})
export class SharedModule { }
