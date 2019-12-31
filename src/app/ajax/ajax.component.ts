import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css'],
  providers: [HttpService]
})
export class AjaxComponent implements OnInit {
  users = [];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getFaculty().subscribe((result:any) =>{console.log(result)});
  }

}
