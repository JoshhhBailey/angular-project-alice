import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { SlickCarouselModule } from 'ngx-slick-carousel'

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { WorkComponent } from './work/work.component';
import { PlayComponent } from './play/play.component';
import { MeComponent } from './me/me.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AllDifferentAllNormalComponent } from './project-pages/all-different-all-normal/all-different-all-normal.component';
import { HeaderComponent } from './components/project-pages/header/header.component';
import { BurgerMenuComponent } from './components/project-pages/burger-menu/burger-menu.component';
import { ItsYourTimeComponent } from './project-pages/its-your-time/its-your-time.component';
import { FreeridercoComponent } from './project-pages/freeriderco/freeriderco.component';
import { EeComponent } from './project-pages/ee/ee.component';
import { BbcRadioOneComponent } from './project-pages/bbc-radio-one/bbc-radio-one.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    WorkComponent,
    PlayComponent,
    MeComponent,
    FooterComponent,
    CarouselComponent,
    AllDifferentAllNormalComponent,
    HeaderComponent,
    BurgerMenuComponent,
    ItsYourTimeComponent,
    FreeridercoComponent,
    EeComponent,
    BbcRadioOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
