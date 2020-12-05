import { Component, OnInit } from "@angular/core";
import { BACKUPS } from "../../overview/data";
import { tdRotateAnimation } from '@covalent/core/common';

export interface Backup {
  jobId: string;
  customerId: string;
  name: string;
  siteId: string;
  dsaServerVersion: string;
  jobTargetType: string;
  retentionSource: string;
  isActive: boolean;
  jobType: string;
  backupType: string;
  status: string;
  description: string;
  noOfRetentionCopies: number;
  backupSegment: string;
  dataPhase: string;
  isAutoAbortActive: boolean;
  autoAbortInMin: string;
  jobPriority: number;
  engine: string;
  objects: number;
  databases: number;
  tables: number;
  next: Date;
  last: Date;
}

const BACKUP_DATA: any[] = BACKUPS;

@Component({
  selector: "app-data-recovery-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  animations: [ tdRotateAnimation, ],
})
export class DataRecoveryDetailsComponent implements OnInit {
  toggleList: boolean = true;
  backups: any[] = BACKUP_DATA;
  detailViews: any = [
    { name: "Overview", link: ["./"] },
    { name: "Objects", link: ["objects"] },
    { name: "Schedule", link: ["schedule"] },
    { name: "History", link: ["history"] },
    { name: "Settings", link: ["settings"] }
  ];
  constructor() {}

  ngOnInit() {}
}
