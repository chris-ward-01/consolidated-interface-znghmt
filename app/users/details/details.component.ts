import { Component, OnInit } from "@angular/core";
import { USERS } from "../../overview/data";
import { tdRotateAnimation } from '@covalent/core/common';

export interface User {
  username: string;
  name: object;
  email: string;
  status: string;
  last_login: string;
  roles: object;
}

const ELEMENT_DATA: any[] = USERS;

@Component({
  selector: "app-users-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  animations: [ tdRotateAnimation, ],
})
export class UsersDetailsComponent implements OnInit {
  toggleList: boolean = true;
  systems = ELEMENT_DATA;
  detailViews: any = [
    { name: "DETAILS", link: ["./"] },
    { name: "AUDIT LOG", link: ["audit"] },
    { name: "ROLES", link: ["roles"] },
  ];
  constructor() {}

  ngOnInit() {}
}
