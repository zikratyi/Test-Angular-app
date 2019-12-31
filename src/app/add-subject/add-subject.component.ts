import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Subject } from '../subject/subject';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css'],
  providers: [HttpService]
})
export class AddSubjectComponent implements OnInit {
  subjectAddForm = new FormGroup({
    subject_name: new FormControl(''),
    subject_description: new FormControl(''),
  });
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }
  onSubmit(subject: Subject) {
    this.httpService.setSubject(subject).subscribe((result:Subject[]) => {
      console.log(result)});
  }

}
