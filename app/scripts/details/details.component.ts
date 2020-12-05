import { Component, OnInit } from "@angular/core";
import { SCRIPTS } from "../../overview/data";
import { tdRotateAnimation } from '@covalent/core/common';

const SCRIPTS_DATA: any[] = SCRIPTS;

@Component({
  selector: "app-scripts-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  animations: [ tdRotateAnimation, ],
})
export class ScriptsDetailsComponent implements OnInit {
  toggleList: boolean = true;
  scripts: any[] = SCRIPTS;
  detailViews: any = [
    { name: "DETAILS", link: ["./"] },
    { name: "CODE", link: ["code"] },
    { name: "HISTORY", link: ["history"] },
    { name: "VERSIONS", link: ["versions"] },
    { name: "PERMISSIONS", link: ["permissions"] },
  ];
  constructor() {}

  ngOnInit() {}
}
