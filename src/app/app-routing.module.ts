import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { WorkComponent } from './work/work.component';
import { PlayComponent } from './play/play.component';
import { MeComponent } from './me/me.component';

import { AllDifferentAllNormalComponent } from './project-pages/all-different-all-normal/all-different-all-normal.component'
import { ItsYourTimeComponent } from './project-pages/its-your-time/its-your-time.component'
import { FreeridercoComponent } from './project-pages/freeriderco/freeriderco.component'
import { EeComponent } from './project-pages/ee/ee.component';
import { BbcRadioOneComponent } from './project-pages/bbc-radio-one/bbc-radio-one.component'

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full'},
  { path: 'intro', component: IntroComponent },
  { path: 'work', component: WorkComponent },
  { path: 'play', component: PlayComponent },
  { path: 'me', component: MeComponent },
  { path: 'work/all-different-all-normal', component: AllDifferentAllNormalComponent },
  { path: 'work/its-your-time', component: ItsYourTimeComponent },
  { path: 'work/freeriderco', component: FreeridercoComponent },
  { path: 'work/ee', component: EeComponent },
  { path: 'work/bbc-radio-1', component: BbcRadioOneComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
