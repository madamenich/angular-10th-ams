import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ArticleService } from 'src/app/service/article.service';
import { IArticle } from 'src/app/model/iarticle';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles1 !:IArticle[];








  user_list = [{ name: 'SeavPinh', subject: 'Spring' },
  { name: 'SingChheng', subject: 'Blockchain' },
  { name: 'Choumy', subject: 'Data Analytics' },
  { name: 'Kimhab', subject: 'Big Data' }



  ]
@Input()
category_name!:string;

@Output()
liked = new EventEmitter();


 content !:string ;
 author_name!:string;

 article= {id:1,title:'choumy is handsome'};

 student_name = 'Vanrith';



  constructor(private articleService: ArticleService) {
    this.content = 'Hello Kimgech!';
   }

  ngOnInit(): void {

  }
  getName(name:string):void {
    this.author_name = name;
  }

  passDataToMyParent(data:any):void {
    this.liked.emit(data);


  }


}
