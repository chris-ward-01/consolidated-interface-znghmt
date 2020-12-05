import { Component, OnInit, ViewChild, Injectable } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from "@angular/forms";
import { MatSelect, MatOption } from "@angular/material/select";
import { tdFadeInOutAnimation, tdRotateAnimation } from '@covalent/core/common';
import { OBJECTS, EXCLUDED } from "../../../overview/data";

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { ArrayDataSource } from "@angular/cdk/collections";
import { TREE, CodeNode } from "./tree";

export interface Objects {
  DataBaseName: string;
  TableName: string;
  TableKind: string;
}

const INCLUDED_DATA: any[] = OBJECTS;
const EXCLUDED_DATA: any[] = EXCLUDED;

const TREE_DATA: any[] = TREE;

@Component({
  selector: "app-data-recovery-objects",
  templateUrl: "./objects.component.html",
  styleUrls: ["./objects.component.scss"],
  animations: [ tdRotateAnimation, ],
})
export class DataRecoveryObjectsComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('mySel') columnSelect: MatSelect;

  myFormControl = new FormControl();
  elements: any[] = [];
  allSelected = false;

  selectedInclusion: string = 'included';

  treeListSelection: string = 'list';
  treeControl = new NestedTreeControl<CodeNode>(node => node.children);
  treeDataSource = new ArrayDataSource(TREE);
  hasChild = (_: number, node: CodeNode) =>
    !!node.children && node.children.length > 0;
  

  objects: any[] = OBJECTS;
  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.selectedInclusion = 'included';
  }
  get selectedRowNum() {
    return this.selection.selected.length;
  }

  displayedColumns: string[] = ["select", "TableName", "TableKind", "DataBaseName", "Size"];
  columnToggles: string[] = ["TableName", "TableKind", "DataBaseName", "Size"];
  expandedElement: Objects | null;

  dataSource = new MatTableDataSource<Objects>(INCLUDED_DATA);
  selection = new SelectionModel<Objects>(true, []);

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
  checkboxLabel(row?: Objects): string {
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

  // toggle chips
  toggleInclusion(selection: any): void {
    this.selectedInclusion = selection;
    if (selection = "included") {
      this.dataSource = new MatTableDataSource<Objects>(EXCLUDED_DATA);
    } else if (selection = "excluded") {
      this.dataSource = new MatTableDataSource<Objects>(EXCLUDED_DATA);
    }
  }
}
