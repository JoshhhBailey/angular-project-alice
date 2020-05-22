import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { PlayComponent } from './play/play.component';
import { MeComponent } from './me/me.component';
import { Project1Component } from './featured-projects/project1/project1.component';
import { Project2Component } from './featured-projects/project2/project2.component';
import { Project3Component } from './featured-projects/project3/project3.component';
import { Project4Component } from './featured-projects/project4/project4.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'work/freeriderco', component: Project1Component },
  { path: 'work/all-different-all-normal', component: Project2Component },
  { path: 'work/its-your-time', component: Project3Component },
  { path: 'work/bbc-radio-1', component: Project4Component },
  { path: 'play', component: PlayComponent },
  { path: 'me', component: MeComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
