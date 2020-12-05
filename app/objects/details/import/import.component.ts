import { Component, OnInit, ViewChild } from "@angular/core";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatTableDataSource } from "@angular/material/table";
import {MatPaginator} from '@angular/material/paginator';
import { SelectionModel } from "@angular/cdk/collections";
import { OBJECTS, RESULTS } from "../../../overview/data";

export interface Tag {
  name: string;
}

export interface Objects {
  first_name: string;
  last_name: string;
  email: string;
  balance: number;
}

const OBJECT_DATA: any[] = OBJECTS;
const RESULTS_DATA: any[] = RESULTS;

@Component({
  selector: "app-objects-import",
  templateUrl: "./import.component.html",
  styleUrls: ["./import.component.scss"],
  preserveWhitespaces: true, 
})
export class ObjectsImportComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  loadPreview: boolean = false;

  edit: any = {
    isActive: false,
    changes: false
  };

  editMode = true;

  editorVal: string = `### Context

Crime incident reports are provided by Boston Police Department (BPD) to document the initial details surrounding an incident to which BPD officers respond. This is a dataset containing records from the new crime incident report system, which includes a reduced set of fields focused on capturing the type of incident as well as when and where it occured.

### Content

Records begin on June 14, 2015 and continue to August 08, 2020

### Acknowledgements

The data is provided by Analyze Boston. The most up-to-date version can be found here.

### Inspiration

What types of crimes are most common? Where are different types of crimes most likely to occur? Does the frequency of crimes change over the day? Week? Year?
 `;

 visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: Tag[] = [
    {name: 'finance'},
    {name: 'reports'},
    {name: 'analyst'},
    {name: 'production'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;

  }

  get selectedRowNum() {
    return this.selection.selected.length;
  }

  displayedColumns: string[] = ["first_name", "last_name", "balance", "email"];

  dataSource = new MatTableDataSource<Object>(RESULTS_DATA);
  selection = new SelectionModel<Object>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  // Load data preview
  togglePreview(): void {
    this.loadPreview = true;
  }
}
