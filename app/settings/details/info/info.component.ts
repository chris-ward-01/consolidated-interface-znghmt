import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from "@angular/forms";
import { MatSelect, MatOption } from "@angular/material/select";
import { NOTIFICATIONSETTINGS } from "./data.ts";

export interface NotificationSetting {
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

interface Alert {
  value: string;
  viewValue: string;
}

const SETTING_DATA: any[] = NOTIFICATIONSETTINGS;

@Component({
  selector: "app-settings-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"],
  preserveWhitespaces: true, 
})
export class SettingsInfoComponent implements OnInit {

  alerts: Alert[] = [
    {value: '0', viewValue: 'All changes'},
    {value: '1', viewValue: 'Failures'},
    {value: '2', viewValue: 'Backups'},
    {value: '3', viewValue: 'None'}
  ];
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('mySel') columnSelect: MatSelect;

  myFormControl = new FormControl();
  elements: any[] = [];
  allSelected = false;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  get selectedRowNum() {
    return this.selection.selected.length;
  }

  displayedColumns: string[] = ["select", "name", "description", "setting"];

  dataSource = new MatTableDataSource<NotificationSetting>(SETTING_DATA);
  selection = new SelectionModel<NotificationSetting>(true, []);

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
  checkboxLabel(row?: NotificationSetting): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }
}