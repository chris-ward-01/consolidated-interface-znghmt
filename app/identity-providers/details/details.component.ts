import { Component, OnInit } from "@angular/core";
import { IDP } from "../../overview/data";
import { tdRotateAnimation } from '@covalent/core/common';

export interface IdentityProvider {
  name: string;
  description: string;
  type: string;
  url: string;
}

const ELEMENT_DATA: any[] = IDP;

@Component({
  selector: "app-identity-providers-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  animations: [ tdRotateAnimation, ],
})
export class IdentityProvidersDetailsComponent implements OnInit {
  toggleList: boolean = true;
  providers = ELEMENT_DATA;
  detailViews: any = [
    { name: "DETAILS", link: ["./"] },
    { name: "AUDIT LOG", link: ["audit"] },
    { name: "SERVICES", link: ["roles"] },
  ];
  constructor() {}

  ngOnInit() {}
}
