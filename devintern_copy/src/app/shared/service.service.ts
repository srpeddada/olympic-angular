import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly URL1 = "https://olympictest.herokuapp.com/users/postData";
  readonly URL2 = "https://olympictest.herokuapp.com/users/getData";
  
 constructor(public http: HttpClient) {}

  postdata(data) {
      return this.http.post(this.URL1, data, {
      responseType: "text" as "json",
    });
  }
  getdata(data) {
    return this.http.post(this.URL2, data, {
      responseType: "text" as "json",
    });
  }


}
