import { Component, OnInit } from '@angular/core';
export interface Version {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-notifications-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss']
})
export class NotificationsVersionsComponent implements OnInit {
  versions: Version[] = [
    {
      name: '2.4',
      updated: new Date('1/1/16'),
    },
    {
      name: '2.3',
      updated: new Date('1/17/16'),
    },
    {
      name: '2.2',
      updated: new Date('1/28/16'),
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}