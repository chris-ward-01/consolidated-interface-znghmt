import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-settings-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss'],
  preserveWhitespaces: true, 
})
export class SettingsPermissionsComponent implements OnInit {
  edit: any = {
    isActive: false,
    changes: false
  };

  editMode = true;

  editorVal: string = `### Context

Crime incident reports are provided by Boston Police Department (BPD) to document the initial details surrounding an incident to which BPD officers respond. This is a dataset containing records from the new crime incident report system, which includes a reduced set of fields focused on capturing the type of incident as well as when and where it occured.

### Content

Records begin on June 14, 2015 and continue to August 08, 2020

### Acknowledgements

The data is provided by Analyze Boston. The most up-to-date version can be found here.

### Inspiration

What types of crimes are most common? Where are different types of crimes most likely to occur? Does the frequency of crimes change over the day? Week? Year?
 `;

 visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: Tag[] = [
    {name: 'finance'},
    {name: 'reports'},
    {name: 'analyst'},
    {name: 'production'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit() {}
}
