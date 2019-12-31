import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { AjaxComponent } from './ajax/ajax.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'ajax', component: AjaxComponent },
  { path: 'subject', component: SubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
