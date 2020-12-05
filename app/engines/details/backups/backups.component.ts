import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from "@angular/forms";
import { MatSelect, MatOption } from "@angular/material/select";
import { tdFadeInOutAnimation, tdRotateAnimation } from '@covalent/core/common';
import { ENGINES, USERS, BACKUPS } from "../../../overview/data";

export interface Engine {
  name: string;
  description: string;
  platform: string;
  system: string;
  status: string;
  purpose: string;
  plan: string;
  usage: string;
}

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

export interface User {
  username: string;
  name: object;
  email: string;
  status: string;
  last_login: string;
  roles: object;
}

const ELEMENT_DATA: any[] = ENGINES;
const USER_DATA: any[] = USERS;
const BACKUP_DATA: any[] = BACKUPS;

@Component({
  selector: "app-engines-backups",
  templateUrl: "./backups.component.html",
  styleUrls: ["./backups.component.scss"],
  animations: [
    tdFadeInOutAnimation,
    tdRotateAnimation,
  ],
})
export class EnginesBackupsComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('mySel') columnSelect: MatSelect;

  myFormControl = new FormControl();
  elements: any[] = [];
  allSelected = false;
  

  backups: any[] = BACKUPS;
  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  get selectedRowNum() {
    return this.selection.selected.length;
  }

  displayedColumns: string[] = ["select", "name", "last", "status", "next"];
  columnToggles: string[] = ["select", "name", "last", "status", "next"];
  expandedElement: Backup | null;

  dataSource = new MatTableDataSource<Backup>(BACKUP_DATA);
  selection = new SelectionModel<Backup>(true, []);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Backup): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.jobPriority + 1}`;
  }

  // toggle table columns
  columnClick(colName: string) {
    const colIndex = this.displayedColumns.findIndex(col => col === colName);
    
    if (colIndex > 0) {
      // column is currently shown in the table, so we remove it
      this.displayedColumns.splice(colIndex, 1);
    } else {
      // column is not in the table, so we add it
      this.displayedColumns.push(colName);
    }
  }
}
