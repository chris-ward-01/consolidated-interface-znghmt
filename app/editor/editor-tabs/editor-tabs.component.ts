import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { MatTabGroup } from "@angular/material/tabs";
import { TdDialogService } from "@covalent/core/dialogs";

import { TABS_DEEP_COPY, Tab } from "../tabs";

@Component({
  selector: "app-editor-tabs",
  templateUrl: "./editor-tabs.component.html",
  styleUrls: ["./editor-tabs.component.scss"]
})
export class EditorTabsComponent implements OnInit {
  @Input() tabs: Tab[];
  @ViewChild("scriptTabs") _scriptTabs: MatTabGroup;

  constructor(private _dialogService: TdDialogService) {}

  ngOnInit() {}

  get scriptRunning(): boolean {
    if (
      !this._scriptTabs ||
      !this._scriptTabs.selectedIndex ||
      !this.tabs ||
      !this.tabs[this._scriptTabs.selectedIndex]
    ) {
      return false;
    }

    return this.tabs[this._scriptTabs.selectedIndex].isRunning;
  }

  updatedOpenedTabs(tabs: Tab[]): Tab[] {
    return tabs.filter(tab => !tab.closed);
  }

  saveTab(): void {
    this.tabs[this._scriptTabs.selectedIndex].isSaved = true;
  }

  closeTab(tab): void {
    if (tab.isSaved) {
      tab.closed = true;
      this.tabs = this.updatedOpenedTabs(this.tabs);
      console.log(this.tabs);
      return;
    }

    this._dialogService
      .openConfirm({
        message: "Unsaved changes will be lost, do you want to proceed?",
        disableClose: true,
        title: "Unsaved Changes",
        cancelButton: "CANCEL",
        acceptButton: "CONTINUE",
        width: "500px"
      })
      .afterClosed()
      .subscribe((accept: boolean) => {
        if (accept) {
          tab.closed = true;
        } else {
          tab.closed = false;
        }
        this.tabs = this.updatedOpenedTabs(this.tabs);
        console.log(this.tabs);
      });
  }

  renameTab(): void {
    this._dialogService
      .openPrompt({
        message: "Type a new name for this script",
        disableClose: true, // defaults to false
        title: "Raname Script", //OPTIONAL, hides if not provided
        cancelButton: "CANCEL", //OPTIONAL, defaults to 'CANCEL'
        acceptButton: "RENAME", //OPTIONAL, defaults to 'ACCEPT'
        width: "400px" //OPTIONAL, defaults to 400px
      })
      .afterClosed()
      .subscribe((newValue: string) => {
        if (newValue) {
          this.tabs[this._scriptTabs.selectedIndex].name = newValue;
        } else {
          return;
        }
      });
  }

  refreshTabs(): void {
    this.tabs = TABS_DEEP_COPY();
  }

  runScript(): void {
    const tab = this.tabs[this._scriptTabs.selectedIndex];
    tab.isRunning = true;
    setTimeout(() => (tab.isRunning = false), 3000);
  }
}
