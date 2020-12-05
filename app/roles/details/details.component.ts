import { Component, OnInit } from "@angular/core";
import { ROLES } from "../../overview/data";
import { tdRotateAnimation } from '@covalent/core/common';

export interface Role {
  name: string;
  description: string;
  status: string;
  composite: string;
  users: number;
}

const ELEMENT_DATA: any[] = ROLES;

@Component({
  selector: "app-roles-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  animations: [ tdRotateAnimation, ],
})
export class RolesDetailsComponent implements OnInit {
  toggleList: boolean = true;
  roles = ELEMENT_DATA;
  detailViews: any = [
    { name: "DETAILS", link: ["./"] },
    { name: "PERMISSIONS", link: ["permissions"] },
    { name: "USERS", link: ["versions"] },
  ];
  constructor() {}

  ngOnInit() {}
}
