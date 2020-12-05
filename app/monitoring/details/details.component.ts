import { Component, OnInit } from "@angular/core";
import { REPORTS } from "../../overview/data";
import { tdRotateAnimation } from '@covalent/core/common';

const ELEMENT_DATA: any[] = REPORTS;

@Component({
  selector: "app-monitoring-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  animations: [ tdRotateAnimation, ],
})
export class MonitoringDetailsComponent implements OnInit {
  toggleList: boolean = false;
  systems = ELEMENT_DATA;
  detailViews: any = [
    { name: "REPORT", link: ["./"] },
    { name: "INFO", link: ["code"] },
    { name: "API", link: ["history"] },
    { name: "LOGS", link: ["versions"] },
    { name: "PERMISSIONS", link: ["permissions"] },
    { name: "ALERTS", link: ["schedule"] }
  ];
  constructor() {}

  ngOnInit() {}
}
