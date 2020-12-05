import { Component, ChangeDetectorRef, OnInit, ViewChild } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { TdMediaService } from "@covalent/core/media";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { ArrayDataSource } from "@angular/cdk/collections";

import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { tdRotateAnimation } from "@covalent/core/common";

import { CONNECTIONS, Connection } from "./connections";
import { DEFAULTDB, DefaultDatabase } from "./default-databases";
import { TABS_DEEP_COPY } from "./tabs";
import { TREE_DATA, CodeNode } from "./tree";
import { TdDialogService } from "@covalent/core/dialogs";

import { VantageThemeService } from "@td-vantage/ui-platform/theme";

import { SCRIPTS } from '../overview/data';

import {
  MonacoEditorLoaderService,
  MonacoEditorComponent,
  MonacoEditorConstructionOptions
} from "@materia-ui/ngx-monaco-editor";
import { filter, take } from "rxjs/operators";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"],
  animations: [tdRotateAnimation],
  preserveWhitespaces: true
})
export class EditorComponent implements OnInit {
  /* -------- Needed for monaco editor - START ----- */
  @ViewChild(MonacoEditorComponent, { static: false })
  monacoComponent: MonacoEditorComponent;
  editorOptions: MonacoEditorConstructionOptions = {
    theme: "myCustomTheme",
    language: "sql",
    roundedSelection: true,
    autoIndent: true
  };
  /* -------- Needed for monaco editor - END ----- */

  tabs = TABS_DEEP_COPY();

  name = "Starter Template";
  expandedRail: boolean = false;

  defaultDatabase: string = 'database1';

  showEditor: boolean = true;
  showResults: boolean = true;
  showConnection: boolean = true;

  code = `CREATE FOREIGN TABLE demo_csv_foreign_table ,
    EXTERNAL SECURITY DEFINER TRUSTED Auth_S3_Def
    (
        Location VARCHAR(2048) CHARACTER SET UNICODE CASESPECIFIC,
        PAYLOAD DATASET INLINE LENGTH 64000 STORAGE FORMAT CSV
    )
    USING (
        LOCATION  ('/az/extfsazblob.blob.core.windows.net/td-usgs/CSVDATA')
    );
 
SHOW TABLE demo_csv_foreign_table;
 
CREATE MULTISET FOREIGN TABLE NOS_TEST.demo_csv_foreign_table ,FALLBACK ,
     EXTERNAL SECURITY DEFINER TRUSTED AUTH_S3_DEF ,
     MAP = TD_MAP1
     (
      Location VARCHAR(2048) CHARACTER SET UNICODE CASESPECIFIC,
      PAYLOAD DATASET(2097088000) INLINE LENGTH 64000 STORAGE FORMAT CSV CHARACTER SET LATIN )
USING
(
      LOCATION  ('/az/extfsazblob.blob.core.windows.net/td-usgs/CSVDATA')
      MANIFEST  ('FALSE')
      PATHPATTERN  ('$Var1/$Var2/$Var3/$Var4/$Var5/$Var6/$Var7/$Var8/$Var9/$Var10/$Var11/$Var12/$Var13/$Var14/$Var15/$Var16/$Var17/$Var18/$Var19/$Var20')
      ROWFORMAT  ('{"character_set":"LATIN"}')
      STOREDAS  ('TEXTFILE')
)
NO PRIMARY INDEX`;

  connections: Connection[] = CONNECTIONS;

  defaultDatabases: DefaultDatabase[] = DEFAULTDB;

  treeControl = new NestedTreeControl<CodeNode>(node => node.children);
  treeDataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: CodeNode) =>
    !!node.children && node.children.length > 0;

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
    private _tdDialogService: TdDialogService,
    private monacoLoaderService: MonacoEditorLoaderService
  ) {
    /* -------- Needed for monaco editor - START ----- */
    this.monacoLoaderService.isMonacoLoaded$
      .pipe(
        filter(isLoaded => isLoaded),
        take(1)
      )
      .subscribe(() => {
        monaco.editor.defineTheme("td-dark", {
          base: "vs-dark", // can also be vs or hc-black
          inherit: true, // can also be false to completely replace the builtin rules
          rules: [
            {
              "foreground": "709070",
              "fontStyle": "italic",
              "token": "comment"
            },
            {
              "fontStyle": "bold",
              "token": "keyword.other.directive"
            },
            {
              "fontStyle": "underline",
              "token": "keyword.other.directive.line-number"
            },
            {
              "foreground": "ff8080",
              "token": "constant.character"
            },
            {
              "foreground": "ff2020",
              "token": "string"
            },
            {
              "foreground": "22c0ff",
              "token": "constant.numeric"
            },
            {
              "fontStyle": "underline",
              "token": "constant.numeric.floating-point"
            },
            {
              "foreground": "6BBFC0",
              "token": "keyword"
            },
            {
              "foreground": "ff8000",
              "fontStyle": "bold",
              "token": "entity.name.module"
            },
            {
              "foreground": "ff8000",
              "fontStyle": "bold",
              "token": "support.other.module"
            },
            {
              "foreground": "ffffa0",
              "token": "keyword.operator"
            },
            {
              "fontStyle": "underline",
              "token": "source.ocaml keyword.operator.symbol.infix.floating-point"
            },
            {
              "fontStyle": "underline",
              "token": "source.ocaml keyword.operator.symbol.prefix.floating-point"
            },
            {
              "foreground": "6080ff",
              "token": "storage.type"
            },
            {
              "foreground": "4080a0",
              "token": "entity.name.class.variant"
            },
            {
              "foreground": "f09040",
              "token": "entity.name.type"
            },
            {
              "foreground": "ffcc66",
              "fontStyle": "bold",
              "token": "entity.name.function"
            },
            {
              "foreground": "ffe000",
              "token": "storage.type.user-defined"
            },
            {
              "foreground": "f4a020",
              "token": "entity.name.type.class.type"
            }
          ],
          colors: {
            "editor.foreground": "#BDAE9D",
            "editor.background": "#111414",
            "editor.selectionBackground": "#1F282E",
            "editor.lineHighlightBackground": "#1F282E",
            "editorCursor.foreground": "#889AFF",
            "editorWhitespace.foreground": "#BFBFBF"
          }
        });
      });

    /* -------- Needed for monaco editor - END ----- */
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

  toggleResultsVisibility(): void {
    this.showResults = !this.showResults;
    this._cdr.markForCheck();
  }

  toggleEditorVisibility(): void {
    this.showEditor = !this.showEditor;
    this._cdr.markForCheck();
  }

  toggleConnectionVisibility(): void {
    this.showConnection = !this.showConnection;
    this._cdr.markForCheck();
  }

  confirmDestructive() {
    this._tdDialogService.openConfirm({
      title: "Set new default database?",
      message:
        "This will recreate your current session, would you like to continue"
    });
  }

  /* -------- Needed for monaco editor - START ----- */
  configChanged(theme: string): void {
    monaco.editor.setTheme(theme);
    this._cdr.markForCheck();
  }
  editorInit(editor: any) {
    // monaco.editor.setTheme('vs');
    editor.setSelection({
      startLineNumber: 1,
      startColumn: 1,
      endColumn: 50,
      endLineNumber: 3
    });
  }

  /* -------- Needed for monaco editor - END ----- */
}
