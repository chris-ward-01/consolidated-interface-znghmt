import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from "@angular/forms";
import { MatSelect, MatOption } from "@angular/material/select";
import { tdFadeInOutAnimation, tdRotateAnimation } from '@covalent/core/common';
import { ENGINES, USERS, BACKUPS } from "../../../overview/data";

export interface History {
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

const ELEMENT_DATA: any[] = BACKUPS;

@Component({
  selector: 'app-data-recovery-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class DataRecoveryHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  get selectedRowNum() {
    return this.selection.selected.length;
  }

  displayedColumns: string[] = ["last", "status", "next"];
  columnToggles: string[] = ["last", "status", "next"];

  dataSource = new MatTableDataSource<History>(ELEMENT_DATA);
  selection = new SelectionModel<History>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  clearAllSelections() {
    this.selection.clear();
  }
}