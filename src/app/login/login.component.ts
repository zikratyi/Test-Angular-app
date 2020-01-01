import { Component, OnInit } from '@angular/core';
import { HttpService } from "../services/http.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Auth } from './login '

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: boolean = false;
  loginForm = new FormGroup({
    user_name: new FormControl(""),
    password: new FormControl("")
  });
  constructor( private httpService: HttpService ) { }

  ngOnInit() {
  }

  onSubmit(auth: Auth) {
    this.httpService.authUser(auth).subscribe((result:any) =>{console.log(result)});
    this.login = true;
  }
  logout() {
    this.httpService.logout().subscribe((result:any) =>{console.log(result)});
    this.login = false;
  }
}
