import { Component, OnInit } from "@angular/core";
import { ENGINES } from "../../overview/data";
import { tdRotateAnimation } from '@covalent/core/common';

const ELEMENT_DATA: any[] = ENGINES;

@Component({
  selector: "app-scripts-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  animations: [ tdRotateAnimation, ],
})
export class EnginesDetailsComponent implements OnInit {
  toggleList: boolean = true;
  systems = ELEMENT_DATA;
  detailViews: any = [
    { name: "OVERVIEW", link: ["./"] },
    { name: "DATABASES & Labs", link: ["databases"] },
    { name: "DATA SOURCES", link: ["sources"] },
    { name: "PERMISSIONS", link: ["permissions"] },
    { name: "LOGS", link: ["logs"] },
    { name: "Data Recovery", link: ["data-recovery"] },
    { name: "Configure", link: ["config"] }
  ];
  constructor() {}

  ngOnInit() {}
}
