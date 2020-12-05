import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from "@angular/forms";
import { MatSelect, MatOption } from "@angular/material/select";

export interface Source {
  name: string;
  position: number;
  description: string;
  type: string;
  source: string;
}

const SOURCE_DATA: Source[] = [
  {position: 1, name: 'AWS_FINANCE_BUCKET_S3', type: 'Foreign Table', source: 'AWS', description: 'S3 file data lake' },
  {position: 2, name: 'AWS_FINANCE_BUCKET_AZ', type: 'Foreign Table', source: 'Azure ', description: 'Azure cloud storage' },
  {position: 3, name: 'AWS_FINANCE_BUCKET_GCP', type: 'Foreign Table', source: 'GCP', description: 'google cloud storage' },
  {position: 1, name: 'PRESTODB', type: 'Foreign Server', source: 'Presto', description: 'Presto connected data sources' },
  {position: 1, name: 'HDFS_FILES', type: 'Foreign Server', source: 'Hadoop', description: 'HDFS file storage' },
  {position: 1, name: 'KAFKA_WEB_STREAM', type: 'Foreign Server', source: 'Kafka', description: 'streaming web clickstream' },
];

@Component({
  selector: 'app-engines-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class EnginesSourcesComponent implements OnInit {
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

  displayedColumns: string[] = ["select", "name", "description", "type", "source"];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  dataSource = new MatTableDataSource<Source>(SOURCE_DATA);
  selection = new SelectionModel<Source>(true, []);

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
  checkboxLabel(row?: Source): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}