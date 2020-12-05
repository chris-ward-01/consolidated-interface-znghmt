import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: 'app-data-recovery-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class DataRecoverySettingsComponent implements OnInit {
  isEnabled: boolean = true;

  edit: any = {
    isActive: false,
    changes: false
  };

  editMode = true;

  constructor() {}

  ngOnInit() {

  }
  
}