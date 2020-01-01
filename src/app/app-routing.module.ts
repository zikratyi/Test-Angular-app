import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { SubjectComponent } from './subject/subject.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
