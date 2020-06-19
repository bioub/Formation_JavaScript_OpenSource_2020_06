import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.css"],
})
export class ClockComponent implements OnInit, OnDestroy {
  now = new Date();

  private _interval;
  
  ngOnInit(): void {
    this._interval = setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this._interval);
  }
  
  
}
