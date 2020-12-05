import { Component, OnInit, ViewChild } from "@angular/core";
import { VantageThemeService } from "@td-vantage/ui-platform/theme";
import { MatMenuTrigger } from "@angular/material/menu";

import { CONNECTIONS, Connection } from "../editor/connections";

@Component({
  selector: "app-nav-rail",
  templateUrl: "./nav-rail.component.html",
  styleUrls: ["./nav-rail.component.scss"],
  host: { class: "mat-elevation-z4, z-3" }
})
export class NavRailComponent implements OnInit {
  connections: Connection[] = CONNECTIONS;

  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;

  cursorInMenu = false;

  constructor(private _themeService: VantageThemeService) {}

  expandedRail;

  ngOnInit() {}

  toggleRail() {
    this.expandedRail = !this.expandedRail;
  }

  menuOpen() {
    // window.addEventListener();
  }

  toggleTheme($event: Event): void {
    this._themeService.toggleTheme();
  }
}
