import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { TutorialsComponent } from "./tutorials/tutorials.component";
import {
  SubjectComponent,
  SubjectComponentConfirmDelete,
  SubjectComponentEdit
} from "./subject/subject.component";
import {
  GroupComponent,
  GroupComponentAdd,
  GroupComponentDelete,
  GroupComponentEdit,
  GroupComponentView
} from "./group/group.component";
import { LoginComponent } from "./login/login.component";
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "tutorials", component: TutorialsComponent },
  { path: "subject", component: SubjectComponent },
  { path: "subject_del", component: SubjectComponentConfirmDelete },
  { path: "subject_edit", component: SubjectComponentEdit },
  { path: "group", component: GroupComponent },
  { path: "group_add", component: GroupComponentAdd },
  { path: "group_delete", component: GroupComponentDelete },
  { path: "group_edit", component: GroupComponentEdit },
  { path: "group_view", component: GroupComponentView },
  { path: "login", component: LoginComponent },
  { path: "shared", component: SharedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
