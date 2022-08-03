import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
   data_from_child!:any;
   data_to_child!:string;

  constructor() { }

  ngOnInit(): void {
  }

  getDataFromChild(name: string){
    this.data_from_child = name;

  }
  setCategoryName(){
    this.data_to_child='Novel';
  }



}
