import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { tdRotateAnimation } from '@covalent/core/common';

import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { ArrayDataSource } from "@angular/cdk/collections";
import { TREE_DATA, CodeNode } from "./tree";

import { CONNECTIONS, Connection } from "../../editor/connections";

import { OBJECTS, DATABASES } from "../../overview/data";

export interface Database {
  DatabaseName: string;
  PermSpace: number;
  SpoolSpace: number;
  TempSpace: number;
  DBKind: string;
}

const ELEMENT_DATA: any[] = OBJECTS;

@Component({
  selector: "app-objects-scripts-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  animations: [ tdRotateAnimation, ],
})
export class ObjectsDetailsComponent implements OnInit {
  databases: any[] = DATABASES;
  topDatabases: boolean = false;
  connections: Connection[] = CONNECTIONS;
  toggleList: boolean = true;
  viewSearch: boolean = false;
  showObjects: boolean = true;
  showDetails: boolean = true;
  treeListSelection: string = 'list';
  treeControl = new NestedTreeControl<CodeNode>(node => node.children);
  treeDataSource = new ArrayDataSource(TREE_DATA);
  hasChild = (_: number, node: CodeNode) =>
    !!node.children && node.children.length > 0;

  systems = ELEMENT_DATA;
  detailViews: any = [
    { name: "Overview", link: ["./"] },
    { name: "Data", link: ["data"] },
    { name: "Schema", link: ["schema"] },
    { name: "Import / Export", link: ["import"] },
    { name: "Permissions", link: ["permissions"] },
    { name: "Backups / Restore", link: ["backups"] }
  ];
  constructor(
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {}
  // toggle chips
  toggleTreeList(selection: any): void {
    this.treeListSelection = selection;
  }
  // toggle search
  toggleSearch(): void {
    this.viewSearch = !this.viewSearch;
  }

  toggleObjectsVisibility(): void {
    this.showObjects = !this.showObjects;
    this._cdr.markForCheck();
  }

  toggleDetailsVisibility(): void {
    this.showDetails = !this.showDetails;
    this._cdr.markForCheck();
  }

  // toggle top databases
  toggleTopDatabases(): void {
    this.topDatabases = !this.topDatabases;
  }
}
