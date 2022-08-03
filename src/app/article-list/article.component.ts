import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

@Input()
category_name!:string;

@Output()
liked = new EventEmitter();


 content !:string ;
 author_name!:string;
 article= {id:1,title:'choumy is handsome'};



  constructor() {
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
