import { Component, OnInit } from "@angular/core";
import { USERFEDERATION } from "../../overview/data";
import { tdRotateAnimation } from '@covalent/core/common';

export interface UserFederation {
  name: string;
  description: string;
  type: string;
  url: string;
}

const ELEMENT_DATA: any[] = USERFEDERATION;

@Component({
  selector: "app-user-federation-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  animations: [ tdRotateAnimation, ],
})
export class UserFederationDetailsComponent implements OnInit {
  toggleList: boolean = true;
  systems = ELEMENT_DATA;
  detailViews: any = [
    { name: "DETAILS", link: ["./"] },
    { name: "AUDIT LOG", link: ["audit"] },
    { name: "SYNCED USERS", link: ["roles"] },
  ];
  constructor() {}

  ngOnInit() {}
}
