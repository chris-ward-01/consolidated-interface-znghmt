import { Component, OnInit } from "@angular/core";
import { SCRIPTS } from "../_data/data";
import { tdRotateAnimation } from '@covalent/core/common';

const ELEMENT_DATA: any[] = SCRIPTS;

@Component({
  selector: "app-settings-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  animations: [ tdRotateAnimation, ],
})
export class SettingsDetailsComponent implements OnInit {
  toggleList: boolean = true;
  settings = ELEMENT_DATA;
  detailViews: any = [
    { name: "Manage Notifications", link: ["./"] },
    { name: "Preferences", link: ["preferences"] },
  ];
  constructor() {}

  ngOnInit() {}
}
