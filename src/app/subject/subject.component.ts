import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { HttpService } from "../services/http.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Subject } from "./subject";
import { MatTableDataSource, MatTable } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  subject: Subject;
}

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.css"],
  providers: [
    HttpService,
    MatDialog
  ]
})
export class SubjectComponent implements OnInit {
  listSubjects: Subject[] = [];
  @ViewChild('table', {static: true}) table: MatTable<Element>;
  displayedColumns = ['id', 'name', 'description', 'but_edit','but_del']
  /** Create form for add new subject */
  subjectAddForm = new FormGroup({
    subject_name: new FormControl(""),
    subject_description: new FormControl("")
  });

  constructor(private httpService: HttpService, public dialog: MatDialog) {}

  // add modal window for confirm delete
  confirmDeleteDialog(subject: Subject): void {
    const dialogRef = this.dialog.open(SubjectComponentConfirmDelete, {
      width: '300px',
      data: {subject: subject}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.delete(result);
      }
    });
  }
  // Add modal window for edit Subject
  editSubjectDialog(subject: Subject): void {
    const dialogRef = this.dialog.open(SubjectComponentEdit, {
      width: '400px',
      data: {subject: subject}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.editSubject(result);
      }
    });
  }

  ngOnInit() {
    this.httpService.getSubject().subscribe((result: Subject[]) => {
      this.listSubjects = result;
      console.log(result);
    });
  }
  /** Add new subject*/
  onSubmit(subject: Subject) {
    this.httpService.setSubject(subject).subscribe((result: Subject[]) => {
      this.listSubjects.push(result[0]);
      this.table.renderRows();
      console.log(result);
    });
  }
  /** Delete subject for id */
  delete(subject: Subject) {
    this.listSubjects = this.listSubjects.filter(sub => sub !== subject);
    this.httpService.delSubject(subject).subscribe((result: Subject[]) => {
      console.log(result);
    });
  }
  /** Update name or description current subject */
  editSubject(subject: Subject) {
    this.httpService.updateSubject(subject).subscribe((result: Subject[]) => {
      console.log(result);
      const index: number = result
        ? this.listSubjects.findIndex(
            sub => sub.subject_id === result[0].subject_id
          )
        : -1;
      if (index > -1) {
        this.listSubjects[index] = result[0];
        this.table.renderRows();
      }
    });
  }
}
// Add Component for modal window Confirm
@Component({
  selector: "app-subject-confirmDelete",
  templateUrl: "./subject.component.confirmDelete.html",
  styleUrls: ["./subject.component.css"],
})
export class SubjectComponentConfirmDelete {

  constructor(
    public dialogRef: MatDialogRef<SubjectComponentConfirmDelete>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

// Add Component for modal window Edit
@Component({
  selector: "app-subject-edit",
  templateUrl: "./subject.component.edit.html",
  styleUrls: ["./subject.component.css"],
})
export class SubjectComponentEdit {

  constructor(
    public dialogRef: MatDialogRef<SubjectComponentEdit>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

