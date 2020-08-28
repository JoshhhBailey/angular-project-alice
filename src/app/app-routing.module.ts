import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { WorkComponent } from './work/work.component';
import { PlayComponent } from './play/play.component';
import { MeComponent } from './me/me.component';

import { AllDifferentAllNormalComponent } from './project-pages/all-different-all-normal/all-different-all-normal.component'

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full'},
  { path: 'intro', component: IntroComponent },
  { path: 'work', component: WorkComponent },
  { path: 'play', component: PlayComponent },
  { path: 'me', component: MeComponent },
  { path: 'work/all-different-all-normal', component: AllDifferentAllNormalComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
