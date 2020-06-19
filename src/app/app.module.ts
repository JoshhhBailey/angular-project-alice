import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroComponent } from './intro/intro.component';
import { WorkComponent } from './work/work.component';
import { PlayComponent } from './play/play.component';
import { MeComponent } from './me/me.component';
import { Project1Component } from './featured-projects/project1/project1.component';
import { Project2Component } from './featured-projects/project2/project2.component';
import { Project3Component } from './featured-projects/project3/project3.component';
import { Project4Component } from './featured-projects/project4/project4.component';
import { FooterComponent } from './components/footer/footer.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    WorkComponent,
    PlayComponent,
    MeComponent,
    Project1Component,
    Project2Component,
    Project3Component,
    Project4Component,
    FooterComponent,
    BurgerMenuComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
