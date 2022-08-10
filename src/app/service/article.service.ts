import { IArticle } from '../model/iarticle';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  article_list :IArticle[] = [{ name: 'Web Development', category: 'IT'},{ name: 'Cloud Computing', category: 'IT'}]
  constructor() { }
}
