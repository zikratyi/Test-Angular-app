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
  authUser(auth: Auth): Observable<Auth> {
    const url = `${this.serverUrl}/login/index`;
    return this.httpClient.post<Auth>(url, auth, httpOptions);
  }
  /** GET logout */
  public logout(): Observable<any> {
    const url = `${this.serverUrl}/login/logout`;
    return this.httpClient.get(url);
  }
  /** GET all records*/
  public getRecords(entity: string): Observable<any> {
    const url = `${this.serverUrl}/${entity}/getRecords`;
    return this.httpClient.get(url);
  }
    /** GET one record for id*/
    public getRecord(entity: string, id: number): Observable<any> {
      const url = `${this.serverUrl}/${entity}/getRecords/${id}`;
      return this.httpClient.get(url);
    }
    /** GET range records with optional parameters: fieldName and direction (1 or -1) using for sorting data*/
    public getRecordsRange(entity: string, limit: number, offset: number, fieldName: string = null, direction: number = 1): Observable<any> {
      let url: string;
      if (fieldName) {
        url = `${this.serverUrl}/${entity}/getRecordsRange/${limit}/${offset}/${fieldName}/${direction}`;
      }
      else  {
        url = `${this.serverUrl}/${entity}/getRecordsRange/${limit}/${offset}}`;
      }
      
      return this.httpClient.get(url);
    }
    /** POST Add new entity */
    public insertData(entity: string, data: any): Observable<any> {
      const url = `${this.serverUrl}/${entity}/insertData`;
      return this.httpClient.post(url,data, httpOptions);
    }
    /** DELETE(GET) Entity for id */
    public del(entity: string, id: number): Observable<any> {
      const url = `${this.serverUrl}/${entity}/del/${id}`;
      return this.httpClient.get(url);
    }

    /** GET Subject*/
    public getSubject(): Observable<any> {
      const url = `${this.serverUrl}/Subject/getRecords`;
      return this.httpClient.get(url).pipe();
    }
    /** POST Subject */
    public setSubject(subject: Subject): Observable<any> {
      const url = `${this.serverUrl}/Subject/insertData`;
      return this.httpClient.post(url,subject, httpOptions);
    }
    /** UPDATE Subject */
    public updateSubject(subject: Subject): Observable<any> {
      const url = `${this.serverUrl}/Subject/update/${subject.subject_id}`;
      return this.httpClient.post(url, subject, httpOptions);
    }
    /** DELETE Subject */
    public delSubject(subject: Subject): Observable<any> {
      const url = `${this.serverUrl}/Subject/del/${subject.subject_id}`;
      return this.httpClient.get(url);
    }
}
