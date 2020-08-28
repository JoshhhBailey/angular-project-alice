import { BrowserModule } from '@angular/platform-browser';
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


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    WorkComponent,
    PlayComponent,
    MeComponent,
    FooterComponent,
    CarouselComponent,
    AllDifferentAllNormalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
