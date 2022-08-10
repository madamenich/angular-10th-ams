import { ArticleModule } from '../article/article.module';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login/form-login.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    FormLoginComponent,
  ],
  imports: [
    CommonModule,
    ArticleModule
  ]
})
export class AuthenticationModule { }
