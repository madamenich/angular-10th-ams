import { ArticleComponent } from './article-list/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ArticleComponent, ArticleListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ArticleListComponent]
})
export class ArticleModule { }
