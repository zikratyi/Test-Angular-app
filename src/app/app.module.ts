import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { SubjectComponent, SubjectComponentConfirmDelete, SubjectComponentEdit } from './subject/subject.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { GroupComponent, GroupComponentAdd } from './group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TutorialsComponent,
    SubjectComponent,
    SubjectComponentConfirmDelete,
    SubjectComponentEdit,
    LoginComponent,
    GroupComponent,
    GroupComponentAdd
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }