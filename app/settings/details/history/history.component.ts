import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { HISTORY } from "./data";

export interface History {
  name: string;
  description: string;
  sql: string;
  system: string;
  status: string;
  start_time: string;
  end_time: string;
  duration: string;
  size: string;
  user: string;
}

const ELEMENT_DATA: any[] = HISTORY;

@Component({
  selector: 'app-settings-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class SettingsHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  get selectedRowNum() {
    return this.selection.selected.length;
  }

  displayedColumns: string[] = ["name", "description", "sql", "system", "status", "start_time", "user", "duration", "size"];

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