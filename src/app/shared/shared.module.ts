import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SortNamePipe } from './sort-name.pipe';

@NgModule({
  declarations: [
    SortNamePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
