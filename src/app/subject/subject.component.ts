import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Subject } from './subject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
  providers: [HttpService]
})
export class SubjectComponent implements OnInit {
  listSubjects: Subject[] = [];
  
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getSubject().subscribe((result:Subject[]) => {
      this.listSubjects = result;
      console.log(result)});
  }
  
}
