import { Item } from "./item";
import { Component } from "@angular/core";
@Component({
selector: "app-root",
templateUrl: "./app.component.html",
styleUrls: ["./app.component.css"],
})
export class AppComponent {
title = "todo";
filter: "all" | "active" | "done" = "all";
allItems = [
  { description: "eat", done: true },
  { description: "sleep", done: false },
  { description: "play", done: false },
  { description: "laugh", done: false },
  ];
  get items() {
  if (this.filter === "all") {
  return this.allItems;
  }
  return this.allItems.filter((item) =>
  this.filter === "done" ? item.done : !item.done
  );
  }
  addItem(description: string) {
  this.allItems.unshift({
  description,
  done: false
  });
  }
  }
  
 
 <!-- Buttons that show all, still to do, or done items on click -->
  <div class="btn-wrapper">
  
  <button
  class="btn btn-menu"
  [class.active]="filter == 'all'"
  (click)="filter = 'all'">
  All
  
  </button>
  <button
  class="btn btn-menu"
  [class.active]="filter == 'active'"
  (click)="filter = 'active'">
  To Do
  </button>
  <button
  class="btn btn-menu"
  [class.active]="filter == 'done'"
  (click)="filter = 'done'">
  Done
  </button>
  </div>
 
 