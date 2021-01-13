import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class Test {
  constructor(private http: HttpClient) {}
  searchUser() {
    console.log("service");
    return this.http.get("https://jsonplaceholder.typicode.com/photos");
  }
}
