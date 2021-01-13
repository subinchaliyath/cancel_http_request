import { Component } from "@angular/core";
import { Test } from "./components/test";
import { map } from "rxjs/operators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data;
  constructor(private test: Test) {}
  imageSearch() {
    if (this.data) {
      this.data.unsubscribe();
    }
    this.data = this.test
      .searchUser()
      .pipe(
        map((data) => {
          return data.map((each) => {
            return { ...each, title: "subin" };
          });
        })
      )
      .subscribe((ndata) => {
        console.log(ndata);
      });
  }
}
