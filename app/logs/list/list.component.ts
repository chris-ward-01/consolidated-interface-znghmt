import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from "@angular/forms";
import { MatSelect, MatOption } from "@angular/material/select";
import { tdFadeInOutAnimation, tdRotateAnimation } from '@covalent/core/common';
import { ENGINES, USERS, AUDIT_LOGS } from "../../overview/data";

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
const AUDIT_DATA: any[] = AUDIT_LOGS;

@Component({
  selector: "app-logs-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  animations: [
    tdFadeInOutAnimation,
    tdRotateAnimation,
  ],
})
export class LogsListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('mySel') columnSelect: MatSelect;

  myFormControl = new FormControl();
  elements: any[] = [];
  allSelected = false;
  

  auditLogs: any[] = AUDIT_LOGS;
  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  get selectedRowNum() {
    return this.selection.selected.length;
  }

  displayedColumns: string[] = ["select", "username", "message", "component", "logtime", "toggle"];
  columnToggles: string[] = ["select", "username", "message", "component", "logtime", "toggle"];
  expandedElement: AuditLog | null;

  dataSource = new MatTableDataSource<AuditLog>(AUDIT_DATA);
  selection = new SelectionModel<AuditLog>(true, []);

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
  checkboxLabel(row?: AuditLog): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
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
