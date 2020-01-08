import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { HttpService } from "../services/http.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Group } from "./group";
import { MatTableDataSource, MatTable } from "@angular/material";
import { MatPaginator } from "@angular/material/paginator";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { group } from '@angular/animations';

export interface DialogData {
  subject: Group;
}

export interface Speciality {
  speciality_id: number;
  speciality_code: string;
  speciality_name: string;
}

export interface Faculty {
  faculty_id: number;
  faculty_name: string;
  faculty_description: string;
}

@Component({
  selector: "app-group",
  templateUrl: "./group.component.html",
  styleUrls: ["./group.component.css"],
  providers: [HttpService, MatDialog]
})
export class GroupComponent implements OnInit {
  listGroups: Group[] = [];
  dataSource = new MatTableDataSource<Group>();
  displayedColumns: string[] = [
    "id",
    "name",
    "speciality",
    "faculty",
    "but_edit",
    "but_del"
  ];

  @ViewChild("table", { static: true }) table: MatTable<Group>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(protected httpService: HttpService, public dialog: MatDialog) {}

  ngOnInit() {
    this.httpService.getRecords("group").subscribe((result: Group[]) => {
      this.listGroups = result;
      this.dataSource.data = this.listGroups;
      console.log(result);
    });
    this.dataSource.paginator = this.paginator;
  }

  // add modal window for add new group
  addGroupDialog(group: Group): void {
    const dialogRef = this.dialog.open(GroupComponentAdd, {
      width: "500px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      console.log(result);
      if (result) {
        this.addGroup(result);
      }
    });
  }
  /** Add new group*/
  addGroup(group: Group) {
    this.httpService.insertData("group", group).subscribe((result: Group[]) => {
      this.listGroups.push(result[0]);
      this.table.renderRows();
      this.dataSource.paginator = this.paginator;
      console.log(result);
    });
  }
    // add modal window for confirm delete
    deleteGroupDialog(group: Group): void {
      const dialogRef = this.dialog.open(GroupComponentDelete, {
        width: '300px',
        data: group
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (result) {
          this.delGroup(result);
        }
      });
    }
    delGroup(group: Group) {
      this.httpService.del('group', group.group_id).subscribe((result: any) => {
        if (result) {
          this.listGroups = this.listGroups.filter(gr => gr !== group);
          this.dataSource.data = this.listGroups;
          this.table.renderRows();
          this.dataSource.paginator = this.paginator;
        }
        console.log(result);
      });
    }
}

// Add Component for modal window Add
@Component({
  selector: "app-group-add",
  templateUrl: "./group.component.add.html",
  styleUrls: ["./group.component.css"]
})
export class GroupComponentAdd implements OnInit {
  specialities: Speciality[] = [];
  faculties: Faculty[] = [];

  constructor(
    private httpService: HttpService,
    public dialogRef: MatDialogRef<GroupComponentAdd>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this.httpService
      .getRecords("speciality")
      .subscribe((result: Speciality[]) => {
        this.specialities = result;
        console.log(this.specialities);
      });
    this.httpService.getRecords("faculty").subscribe((result: Faculty[]) => {
      this.faculties = result;
      console.log(this.faculties);
    });
  }
}

// Add Component for modal window Delete
@Component({
  selector: "app-group-delete",
  templateUrl: "./group.component.delete.html",
  styleUrls: ["./group.component.css"]
})
export class GroupComponentDelete {
  constructor(
    public dialogRef: MatDialogRef<GroupComponentDelete>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
