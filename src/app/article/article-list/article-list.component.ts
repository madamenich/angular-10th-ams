import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';

import { ArticleComponent } from './article.component';
import { ArticleService } from 'src/app/service/article.service';
import { IArticle } from './../../model/iarticle';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, AfterViewInit,OnChanges {
test =['']
articles!: IArticle[] ;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
   this.articles = this.articleService.article_list;


  }


  ngAfterViewInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {

  }




}
