import { Component, OnInit } from '@angular/core';
//import {HttpClient} from "@angular/common/http";
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
    this.httpService.get("https://reqres.in/api/users").subscribe((result: any) => {
      console.log(result.data[0]);
      this.users = result.data; 
    });
  }

}
