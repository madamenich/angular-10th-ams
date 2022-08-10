import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleComponent } from './article/article-list/article.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleModule } from './article/article.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticleModule,
    AuthenticationModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
