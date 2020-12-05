import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TdCodeDiffEditorComponent } from './code-diff-editor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TdCodeDiffEditorComponent],
  exports: [TdCodeDiffEditorComponent],
  entryComponents: [],
})
export class CovalentCodeDiffEditorModule {}
