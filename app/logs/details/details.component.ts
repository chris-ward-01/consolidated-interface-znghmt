import { Component, OnInit } from "@angular/core";
import { ENGINES, USERS, AUDIT_LOGS } from "../../overview/data";
import { tdRotateAnimation } from '@covalent/core/common';

export interface AuditLog {
  id: string;
  action: string;
  message: string;
  result: string;
  username: string;
  component: string;
  details: string;
  logtime: Date;
}

const ELEMENT_DATA: any[] = ENGINES;
const AUDIT_DATA: any[] = AUDIT_LOGS;

@Component({
  selector: "app-logs-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  animations: [ tdRotateAnimation, ],
})
export class LogsDetailsComponent implements OnInit {
  toggleList: boolean = true;
  systems = ELEMENT_DATA;
  auditLogs: any[] = AUDIT_LOGS;
  detailViews: any = [
    { name: "Details", link: ["./"] },
    { name: "Configure", link: ["schedule"] }
  ];
  constructor() {}

  ngOnInit() {}
}
