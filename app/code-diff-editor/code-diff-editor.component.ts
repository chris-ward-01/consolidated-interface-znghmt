import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ElementRef,
  NgZone,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { fromEvent, merge, timer } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { loadMonaco, waitUntilMonacoReady } from '@covalent/code-editor';

// counter for ids to allow for multiple editors on one page
let uniqueCounter: number = 0;

// declare all the built in electron objects
declare const monaco: any;

@Component({
  selector: 'td-code-diff-editor',
  templateUrl: './code-diff-editor.component.html',
  styleUrls: ['./code-diff-editor.component.scss'],
})
export class TdCodeDiffEditorComponent implements AfterViewInit, OnDestroy {
  private _destroy: Subject<boolean> = new Subject<boolean>();
  private _widthSubject: Subject<number> = new Subject<number>();
  private _heightSubject: Subject<number> = new Subject<number>();

  private _theme: string = 'vs';
  private _editorInnerContainer: string = 'editorInnerContainer' + uniqueCounter++;
  private _editor: any;
  private _componentInitialized: boolean = false;
  private _editorOptions: any = {};
  private _isFullScreen: boolean = false;
  private _keycode: any;

  private _originalValue: string;
  private _modifiedValue: string;

  private _originalModel: any;
  private _modifiedModel: any;

  @ViewChild('editorContainer', { static: true }) _editorContainer: ElementRef;

  /**
   * editorConfigurationChanged: function($event)
   * Event emitted when editor's configuration changes
   */
  @Output() editorConfigurationChanged: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Set if using Electron mode when object is created
   */
  constructor(private _changeDetectorRef: ChangeDetectorRef, private _elementRef: ElementRef) {}

  /**
   * value?: string
   * Value in the Editor after async getEditorContent was called
   */
  @Input('value')
  set value(value: string) {
    this._modifiedValue = value;
    if (this._editor) {
      this._modifiedModel = monaco.editor.createModel(this._modifiedValue, 'sql');
      this._editor.setModel({
        original: this._originalModel,
        modified: this._modifiedModel,
      });
    }
  }

  get value(): string {
    if (this._editor && this._editor.getModel()) {
      return this._editor.getModel().modified.getValue();
    }
  }

  @Input('original')
  set original(original: string) {
    this._originalValue = original;
    if (this._editor) {
      this._originalModel = monaco.editor.createModel(this._originalValue, 'sql');
      this._editor.setModel({
        original: this._originalModel,
        modified: this._modifiedModel,
      });
    }
  }

  /**
   * theme?: string
   * Theme to be applied to editor
   */
  @Input('theme')
  set theme(theme: string) {
    this._theme = theme;
    if (this._componentInitialized) {
      this._editor.updateOptions({ theme });
      monaco.editor.setTheme(theme);
    }
  }
  get theme(): string {
    return this._theme;
  }

  /**
   * editorOptions?: object
   * Options used on editor instantiation. Available options listed here:
   * https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html
   */
  @Input('editorOptions')
  set editorOptions(editorOptions: any) {
    this._editorOptions = editorOptions;
    if (this._componentInitialized) {
      this._editor.updateOptions(editorOptions);
    }
  }
  get editorOptions(): any {
    return this._editorOptions;
  }

  /**
   * layout method that calls layout method of editor and instructs the editor to remeasure its container
   */
  layout(): void {
    if (this._componentInitialized) {
      this._editor.layout();
    }
  }

  /**
   * Returns if in Full Screen Mode or not
   */
  get isFullScreen(): boolean {
    return this._isFullScreen;
  }

  /**
   * ngAfterViewInit only used for browser version of editor
   * This is where the AMD Loader scripts are added to the browser and the editor scripts are "required"
   */
  ngAfterViewInit(): void {
    loadMonaco();
    waitUntilMonacoReady()
      .pipe(takeUntil(this._destroy))
      .subscribe(() => {
        this.initMonaco();
      });
    merge(
      fromEvent(window, 'resize').pipe(debounceTime(100)),
      this._widthSubject.asObservable().pipe(distinctUntilChanged()),
      this._heightSubject.asObservable().pipe(distinctUntilChanged()),
    )
      .pipe(
        takeUntil(this._destroy),
        debounceTime(100),
      )
      .subscribe(() => {
        this.layout();
        this._changeDetectorRef.markForCheck();
      });
    timer(500, 250)
      .pipe(takeUntil(this._destroy))
      .subscribe(() => {
        if (this._elementRef && this._elementRef.nativeElement) {
          this._widthSubject.next((<HTMLElement>this._elementRef.nativeElement).getBoundingClientRect().width);
          this._heightSubject.next((<HTMLElement>this._elementRef.nativeElement).getBoundingClientRect().height);
        }
      });
  }

  ngOnDestroy(): void {
    this._changeDetectorRef.detach();
    this._destroy.next(true);
    this._destroy.unsubscribe();
  }

  /**
   * showFullScreenEditor request for full screen of Code Editor based on its browser type.
   */
  public showFullScreenEditor(): void {
    if (this._componentInitialized) {
      const codeEditorElement: HTMLDivElement = this._editorContainer.nativeElement as HTMLDivElement;
      const fullScreenMap: object = {
        // Chrome
        requestFullscreen: () => codeEditorElement.requestFullscreen(),
        // Safari
        webkitRequestFullscreen: () => (<any>codeEditorElement).webkitRequestFullscreen(),
        // IE
        msRequestFullscreen: () => (<any>codeEditorElement).msRequestFullscreen(),
        // Firefox
        mozRequestFullScreen: () => (<any>codeEditorElement).mozRequestFullScreen(),
      };

      for (const handler of Object.keys(fullScreenMap)) {
        if (codeEditorElement[handler]) {
          fullScreenMap[handler]();
        }
      }
    }
    this._isFullScreen = true;
  }

  /**
   * exitFullScreenEditor request to exit full screen of Code Editor based on its browser type.
   */
  public exitFullScreenEditor(): void {
    if (this._componentInitialized) {
      const exitFullScreenMap: object = {
        // Chrome
        exitFullscreen: () => document.exitFullscreen(),
        // Safari
        webkitExitFullscreen: () => (<any>document).webkitExitFullscreen(),
        // Firefox
        mozCancelFullScreen: () => (<any>document).mozCancelFullScreen(),
        // IE
        msExitFullscreen: () => (<any>document).msExitFullscreen(),
      };

      for (const handler of Object.keys(exitFullScreenMap)) {
        if (document[handler]) {
          exitFullScreenMap[handler]();
        }
      }
    }
    this._isFullScreen = false;
  }

  /**
   * addFullScreenModeCommand used to add the fullscreen option to the context menu
   */
  private addFullScreenModeCommand(): void {
    this._editor.addAction({
      // An unique identifier of the contributed action.
      id: 'fullScreen',
      // A label of the action that will be presented to the user.
      label: 'Full Screen',
      // An optional array of keybindings for the action.
      contextMenuGroupId: 'navigation',
      keybindings: this._keycode,
      contextMenuOrder: 1.5,
      // Method that will be executed when the action is triggered.
      // @param editor The editor instance is passed in as a convinience
      run: (ed: any) => {
        this.showFullScreenEditor();
      },
    });
  }

  /**
   * initMonaco method creates the monaco editor into the @ViewChild('editorContainer')
   * and emit the onEditorInitialized event.  This is only used in the browser version.
   */
  private initMonaco(): void {
    const containerDiv: HTMLDivElement = this._editorContainer.nativeElement;
    containerDiv.id = this._editorInnerContainer;
    this._originalModel = monaco.editor.createModel(this._originalValue, 'sql');
    this._modifiedModel = monaco.editor.createModel(this._modifiedValue, 'sql');
    this._editor = monaco.editor.createDiffEditor(
      containerDiv,
      Object.assign(
        {
          theme: this._theme,
        },
        this.editorOptions,
      ),
    );
    this._editor.setModel({
      original: this._originalModel,
      modified: this._modifiedModel,
    });
    this._editor.getModifiedEditor().updateOptions({ readOnly: true });
    this._componentInitialized = true;
    this.addFullScreenModeCommand();
  }
}
