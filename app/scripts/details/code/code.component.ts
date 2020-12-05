import { Component, OnInit, ViewChild } from "@angular/core";
import { VantageThemeService } from "@td-vantage/ui-platform/theme";

import {
  MonacoEditorLoaderService,
  MonacoEditorComponent,
  MonacoEditorConstructionOptions
} from "@materia-ui/ngx-monaco-editor";
import { filter, take } from "rxjs/operators";

const code = `CREATE FOREIGN TABLE demo_csv_foreign_table ,
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

@Component({
  selector: "app-code",
  templateUrl: "./code.component.html",
  styleUrls: ["./code.component.scss"],
  preserveWhitespaces: true
})
export class ScriptCodeComponent implements OnInit {
  /* -------- Needed for monaco editor - START ----- */
  @ViewChild(MonacoEditorComponent, { static: false })
  monacoComponent: MonacoEditorComponent;
  editorOptions: MonacoEditorConstructionOptions = {
    theme: "myCustomTheme",
    language: "sql",
    roundedSelection: true,
    autoIndent: true
  };
  code: any = code;
  /* -------- Needed for monaco editor - END ----- */
  edit: any = {
    isActive: false,
    changes: false
  };

  editMode = true;
  constructor(
    private _themeService: VantageThemeService,
    private monacoLoaderService: MonacoEditorLoaderService) {
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
  }

  ngOnInit() {}
  /* -------- Needed for monaco editor - START ----- */
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
