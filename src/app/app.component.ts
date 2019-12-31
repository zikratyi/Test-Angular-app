import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JS course';
  constructor(private httpService: HttpService) { }
  ngOnInit() {
    this.httpService.authUser().subscribe((result:any) =>{console.log(result)});
  }
}
