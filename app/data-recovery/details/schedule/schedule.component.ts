import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-data-recovery-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.scss"]
})
export class DataRecoveryScheduleComponent implements OnInit {
  edit: any = {
    isActive: false,
    changes: false
  };

  editMode = true;

  constructor() {}

  ngOnInit() {

  }
  
}