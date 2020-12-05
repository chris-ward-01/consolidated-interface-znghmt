import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from "@angular/forms";
import { MatSelect, MatOption } from "@angular/material/select";
import { ENGINES } from "../../overview/data";

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

const ELEMENT_DATA: any[] = ENGINES;

@Component({
  selector: "app-engines-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class EnginesListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('mySel') columnSelect: MatSelect;

  myFormControl = new FormControl();
  elements: any[] = [];
  allSelected = false;

  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  get selectedRowNum() {
    return this.selection.selected.length;
  }

  displayedColumns: string[] = ["name", "status", "platform", "purpose", "plan", "usage"];

  dataSource = new MatTableDataSource<Engine>(ELEMENT_DATA);
  selection = new SelectionModel<Engine>(true, []);

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
