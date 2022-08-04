import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';

import { ArticleComponent } from './article.component';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, AfterViewInit,OnChanges {
   data_from_child!:any;
   data_to_child!:string;
   student_name!:string;


  @ViewChild(ArticleComponent)
  childComponent!:ArticleComponent;


  constructor() { }

  ngOnInit(): void {
    this.student_name='Kimhab';

  }

  getDataFromChild(name: string){
    this.data_from_child = name;

  }
  setCategoryName(){
    this.data_to_child='Novel';
  }
  ngAfterViewInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {

  }




}
