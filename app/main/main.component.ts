import { Component, ChangeDetectorRef, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { TdMediaService } from "@covalent/core/media";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { ArrayDataSource } from "@angular/cdk/collections";

import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { tdRotateAnimation } from "@covalent/core/common";
import { VantageThemeService } from "@td-vantage/ui-platform/theme";

import { TdDialogService } from "@covalent/core/dialogs";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  animations: [tdRotateAnimation],
  preserveWhitespaces: true
})
export class MainComponent implements OnInit {

  name = "Starter Template";
  expandedRail: boolean = false;


  stopProp(e: Event): void {
    console.log(e);
    e.preventDefault;
    e.stopImmediatePropagation();
    e.stopPropagation();
  }

  routes: Object[] = [
    {
      icon: "home",
      route: ".",
      title: "Home"
    },
    {
      icon: "library_books",
      route: ".",
      title: "Documentation"
    },
    {
      icon: "color_lens",
      route: ".",
      title: "Style Guide"
    },
    {
      icon: "view_quilt",
      route: ".",
      title: "Layouts"
    },
    {
      icon: "picture_in_picture",
      route: ".",
      title: "Components & Addons"
    }
  ];
  usermenu: Object[] = [
    {
      icon: "swap_horiz",
      route: ".",
      title: "Switch account"
    },
    {
      icon: "tune",
      route: ".",
      title: "Account settings"
    },
    {
      icon: "exit_to_app",
      route: ".",
      title: "Sign out"
    }
  ];

  constructor(
    public media: TdMediaService,
    private _themeService: VantageThemeService,
    private _cdr: ChangeDetectorRef,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _tdDialogService: TdDialogService
  ) {
    this._iconRegistry.addSvgIconInNamespace(
      "assets",
      "teradata",
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        "https://raw.githubusercontent.com/Teradata/covalent/develop/src/assets/icons/teradata.svg"
      )
    );
    this._iconRegistry.addSvgIconInNamespace(
      "assets",
      "teradata-icon",
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        "https://raw.githubusercontent.com/Teradata/covalent/develop/src/assets/icons/teradata-icon.svg"
      )
    );
    this._iconRegistry.addSvgIconInNamespace(
      "assets",
      "teradata-dark",
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        "https://raw.githubusercontent.com/Teradata/covalent/develop/src/assets/icons/teradata-dark.svg"
      )
    );
    this._iconRegistry.addSvgIconSetInNamespace(
      "td-icons",
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        "./node_modules/@td-vantage/ui-platform/theme/icons/teradata-icons.svg"
      )
    );
  }

  ngOnInit() {
    
  }

}
