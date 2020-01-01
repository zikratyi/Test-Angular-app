import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { Subject } from "../subject/subject";
import { Auth } from "../login/login ";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class HttpService {
  serverUrl = "http://dtapi.if.ua";
  constructor(private httpClient: HttpClient) {}
  /** POST: auth */
  authUser(auth: Auth): Observable<any> {
    const url = `${this.serverUrl}/login/index`;
    return this.httpClient.post<any>(url, auth, httpOptions);
  }
  /** GET logout */
  public logout(): Observable<any> {
    const url = `${this.serverUrl}/login/logout`;
    return this.httpClient.get(url);
  }
  /** GET Faculty*/
  public getFaculty(): Observable<any> {
    const url = `${this.serverUrl}/Faculty/getRecords`;
    return this.httpClient.get(url);
  }
    /** GET Subject*/
    public getSubject(): Observable<any> {
      const url = `${this.serverUrl}/Subject/getRecords`;
      return this.httpClient.get(url);
    }
    /** POST Subject */
    public setSubject(subject: Subject): Observable<any> {
      const url = `${this.serverUrl}/Subject/insertData`;
      return this.httpClient.post(url,subject, httpOptions);
    }
    /** UPDATE Subject */
    public updateSubject(id: number, property: string): Observable<any> {
      const url = `${this.serverUrl}/Subject/update/${id}`;
      return this.httpClient.post(url,property, httpOptions);
    }
    /** DELETE Subject */
    public delSubject(subject: Subject): Observable<any> {
      const url = `${this.serverUrl}/Subject/del/${subject.subject_id}`;
      return this.httpClient.get(url);
    }
}
