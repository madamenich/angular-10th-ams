import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleComponent } from './article-list/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleListComponent,
    ArticleComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
