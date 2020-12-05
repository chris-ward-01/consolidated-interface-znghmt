import { Component, OnInit } from '@angular/core';
export interface Version {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-roles-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss']
})
export class RolesVersionsComponent implements OnInit {
  versions: Version[] = [
    {
      name: 'System_Admin',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Script_Editor',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Query_User',
      updated: new Date('1/28/16'),
    }
    ,
    {
      name: 'Monitoring_User',
      updated: new Date('1/01/16'),
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}