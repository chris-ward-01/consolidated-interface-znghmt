import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  preserveWhitespaces: true
})
export class AppComponent implements OnInit {

  name = "Starter Template";

  constructor(
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
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
    this._iconRegistry.addSvgIconInNamespace(
      "assets",
      "illustration-light",
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        "https://raw.githubusercontent.com/kyleledbetter/images/master/illustration-light.svg"
      )
    );
    this._iconRegistry.addSvgIconInNamespace(
      "assets",
      "illustration-dark",
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        "https://raw.githubusercontent.com/kyleledbetter/images/master/illustration-dark.svg"
      )
    );
  }

  ngOnInit() {
    
  }

}
