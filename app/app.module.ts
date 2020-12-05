import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTreeModule } from "@angular/material/tree";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatRippleModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


import { ScrollingModule } from '@angular/cdk/scrolling';

import { CovalentCommonModule } from "@covalent/core/common";
import { CovalentLayoutModule } from "@covalent/core/layout";
import { CovalentMediaModule } from "@covalent/core/media";
import {
  CovalentLoadingModule,
  TdLoadingComponent
} from "@covalent/core/loading";
import { CovalentSearchModule } from "@covalent/core/search";
import { CovalentNotificationsModule } from "@covalent/core/notifications";
import { CovalentMenuModule } from "@covalent/core/menu";
import { CovalentChipsModule } from "@covalent/core/chips";
import { CovalentMessageModule } from "@covalent/core/message";
import { CovalentSidesheetModule } from "@covalent/core/sidesheet";
import { CovalentCodeEditorModule } from "@covalent/code-editor";
import { CovalentTextEditorModule } from "@covalent/text-editor";
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentHighlightModule } from '@covalent/highlight';
import {
  CovalentDialogsModule,
  TdDialogService,
  TdConfirmDialogComponent,
  TdPromptDialogComponent
} from "@covalent/core/dialogs";
import { CovalentDataTableModule } from '@covalent/core/data-table';
import { CovalentPagingModule } from '@covalent/core/paging';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentLineEchartsModule } from '@covalent/echarts/line';
import { CovalentSankeyEchartsModule } from '@covalent/echarts/sankey';


import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";
import { MatBadgeModule } from "@angular/material/badge";
import {
  DummyButtonComponent,
  DummyIconButtonComponent
} from "./dummy-buttons.component";

import { VantageThemeModule } from "@td-vantage/ui-platform/theme";

import { MonacoEditorModule, MONACO_PATH } from "@materia-ui/ngx-monaco-editor";

import { CovalentCodeDiffEditorModule } from './code-diff-editor/code-diff-editor.module';

import { NavRailComponent } from "./nav-rail/nav-rail.component";
import { ConnectionSelectComponent, ConnectionDialogContentComponent } from "./nav-rail/connection-select/connection-select.component";
import { EditorTabsComponent } from "./editor/editor-tabs/editor-tabs.component";
import { ResultsComponent } from "./editor/results/results.component";
import {
  SystemSelectComponent,
  NewConnectionDialogContentComponent
} from "./editor/system-select/system-select.component";
import {
  DefaultDatabaseComponent,
  NewDefaultDialogContentComponent
} from "./editor/default-database/default-database.component";

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { OverviewComponent } from './overview/overview.component';
import { EditorComponent } from './editor/editor.component';
import { ScriptsComponent } from './scripts/scripts.component';
import { ScriptsListComponent } from './scripts/list/list.component';
import { ScriptsDetailsComponent } from './scripts/details/details.component';
import { ScriptCodeComponent } from './scripts/details/code/code.component';
import { ScriptHistoryComponent } from './scripts/details/history/history.component';
import { ScriptInfoComponent } from './scripts/details/info/info.component';
import { ScriptPermissionsComponent } from './scripts/details/permissions/permissions.component';
import { ScriptScheduleComponent } from './scripts/details/schedule/schedule.component';
import { ScriptVersionsComponent } from './scripts/details/versions/versions.component';
import { ObjectsComponent } from './objects/objects.component';
import { ObjectsListComponent } from './objects/list/list.component';
import { ObjectsDetailsComponent } from './objects/details/details.component';
import { ObjectsDatabaseComponent } from './objects/details/database.component';
import { ObjectsOverviewComponent } from './objects/details/overview/overview.component';
import { ObjectsDataComponent } from './objects/details/data/data.component';
import { ObjectsSchemaComponent } from './objects/details/schema/schema.component';
import { ObjectsImportComponent } from './objects/details/import/import.component';
import { ObjectsStatsComponent } from './objects/details/stats/stats.component';
import { ObjectsPermissionsComponent } from './objects/details/permissions/permissions.component';
import { ObjectsBackupsComponent } from './objects/details/backups/backups.component';
import { EnginesComponent } from './engines/engines.component';
import { EnginesListComponent } from './engines/list/list.component';
import { EnginesDetailsComponent } from './engines/details/details.component';
import { EnginesBackupsComponent } from './engines/details/backups/backups.component';
import { EnginesConfigComponent } from './engines/details/config/config.component';
import { EnginesInfoComponent } from './engines/details/info/info.component';
import { EnginesPermissionsComponent } from './engines/details/permissions/permissions.component';
import { EnginesDatabasesComponent } from './engines/details/databases/databases.component';
import { EnginesLogsComponent } from './engines/details/logs/logs.component';
import { EnginesSourcesComponent } from './engines/details/sources/sources.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { MonitoringListComponent } from './monitoring/list/list.component';
import { MonitoringDetailsComponent } from './monitoring/details/details.component';
import { MonitoringCodeComponent } from './monitoring/details/code/code.component';
import { MonitoringHistoryComponent } from './monitoring/details/history/history.component';
import { MonitoringInfoComponent } from './monitoring/details/info/info.component';
import { MonitoringPermissionsComponent } from './monitoring/details/permissions/permissions.component';
import { MonitoringScheduleComponent } from './monitoring/details/schedule/schedule.component';
import { MonitoringVersionsComponent } from './monitoring/details/versions/versions.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationsListComponent } from './notifications/list/list.component';
import { NotificationsDetailsComponent } from './notifications/details/details.component';
import { NotificationsCodeComponent } from './notifications/details/code/code.component';
import { NotificationsHistoryComponent } from './notifications/details/history/history.component';
import { NotificationsInfoComponent } from './notifications/details/info/info.component';
import { NotificationsPermissionsComponent } from './notifications/details/permissions/permissions.component';
import { NotificationsScheduleComponent } from './notifications/details/schedule/schedule.component';
import { NotificationsVersionsComponent } from './notifications/details/versions/versions.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsListComponent } from './settings/list/list.component';
import { SettingsDetailsComponent } from './settings/details/details.component';
import { SettingsCodeComponent } from './settings/details/code/code.component';
import { SettingsHistoryComponent } from './settings/details/history/history.component';
import { SettingsInfoComponent } from './settings/details/info/info.component';
import { SettingsPermissionsComponent } from './settings/details/permissions/permissions.component';
import { SettingsScheduleComponent } from './settings/details/schedule/schedule.component';
import { SettingsVersionsComponent } from './settings/details/versions/versions.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/list/list.component';
import { UsersDetailsComponent } from './users/details/details.component';
import { UsersCodeComponent } from './users/details/code/code.component';
import { UsersHistoryComponent } from './users/details/history/history.component';
import { UsersInfoComponent } from './users/details/info/info.component';
import { UsersPermissionsComponent } from './users/details/permissions/permissions.component';
import { UsersScheduleComponent } from './users/details/schedule/schedule.component';
import { UsersVersionsComponent } from './users/details/versions/versions.component';
import { RolesComponent } from './roles/roles.component';
import { RolesListComponent } from './roles/list/list.component';
import { RolesDetailsComponent } from './roles/details/details.component';
import { RolesCodeComponent } from './roles/details/code/code.component';
import { RolesHistoryComponent } from './roles/details/history/history.component';
import { RolesInfoComponent } from './roles/details/info/info.component';
import { RolesPermissionsComponent } from './roles/details/permissions/permissions.component';
import { RolesScheduleComponent } from './roles/details/schedule/schedule.component';
import { RolesVersionsComponent } from './roles/details/versions/versions.component';
import { UserFederationComponent } from './user-federation/user-federation.component';
import { UserFederationListComponent } from './user-federation/list/list.component';
import { UserFederationDetailsComponent } from './user-federation/details/details.component';
import { UserFederationCodeComponent } from './user-federation/details/code/code.component';
import { UserFederationHistoryComponent } from './user-federation/details/history/history.component';
import { UserFederationInfoComponent } from './user-federation/details/info/info.component';
import { UserFederationPermissionsComponent } from './user-federation/details/permissions/permissions.component';
import { UserFederationScheduleComponent } from './user-federation/details/schedule/schedule.component';
import { UserFederationVersionsComponent } from './user-federation/details/versions/versions.component';
import { IdentityProvidersComponent } from './identity-providers/identity-providers.component';
import { IdentityProvidersListComponent } from './identity-providers/list/list.component';
import { IdentityProvidersDetailsComponent } from './identity-providers/details/details.component';
import { IdentityProvidersCodeComponent } from './identity-providers/details/code/code.component';
import { IdentityProvidersHistoryComponent } from './identity-providers/details/history/history.component';
import { IdentityProvidersInfoComponent } from './identity-providers/details/info/info.component';
import { IdentityProvidersPermissionsComponent } from './identity-providers/details/permissions/permissions.component';
import { IdentityProvidersScheduleComponent } from './identity-providers/details/schedule/schedule.component';
import { IdentityProvidersVersionsComponent } from './identity-providers/details/versions/versions.component';
import { LogsComponent } from './logs/logs.component';
import { LogsListComponent } from './logs/list/list.component';
import { LogsDetailsComponent } from './logs/details/details.component';
import { LogsCodeComponent } from './logs/details/code/code.component';
import { LogsHistoryComponent } from './logs/details/history/history.component';
import { LogsInfoComponent } from './logs/details/info/info.component';
import { LogsPermissionsComponent } from './logs/details/permissions/permissions.component';
import { LogsScheduleComponent } from './logs/details/schedule/schedule.component';
import { LogsVersionsComponent } from './logs/details/versions/versions.component';
import { DataRecoveryComponent } from './data-recovery/data-recovery.component';
import { DataRecoveryListComponent } from './data-recovery/list/list.component';
import { DataRecoveryDetailsComponent } from './data-recovery/details/details.component';
import { DataRecoveryObjectsComponent } from './data-recovery/details/objects/objects.component';
import { DataRecoveryHistoryComponent } from './data-recovery/details/history/history.component';
import { DataRecoveryInfoComponent } from './data-recovery/details/info/info.component';
import { DataRecoveryPermissionsComponent } from './data-recovery/details/permissions/permissions.component';
import { DataRecoveryScheduleComponent } from './data-recovery/details/schedule/schedule.component';
import { DataRecoverySettingsComponent } from './data-recovery/details/settings/settings.component';

import { appRoutes, appRoutingProviders } from './app.routes';

@NgModule({
  imports: [
    appRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    /** Material Modules */
    ScrollingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatMenuModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatTreeModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRadioModule,
    MatInputModule,
    MatBadgeModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentSidesheetModule,
    CovalentMediaModule,
    CovalentSearchModule,
    CovalentChipsModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentMessageModule,
    CovalentCodeEditorModule,
    CovalentTextEditorModule,
    CovalentMarkdownModule,
    CovalentHighlightModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentDataTableModule,
    CovalentPagingModule,
    CovalentBaseEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentBarEchartsModule,
    CovalentLineEchartsModule,
    CovalentSankeyEchartsModule,
    CovalentCodeDiffEditorModule,
    // Vantage
    VantageThemeModule,
    // Alternative monaco editor package
    MonacoEditorModule,
  ],
  declarations: [
    AppComponent,
    MainComponent,
    OverviewComponent,
    EditorComponent,
    EditorTabsComponent,
    ScriptsComponent,
    ScriptsListComponent,
    ScriptsDetailsComponent,
    ScriptCodeComponent,
    ScriptHistoryComponent,
    ScriptInfoComponent,
    ScriptPermissionsComponent,
    ScriptScheduleComponent,
    ScriptVersionsComponent,
    ObjectsComponent,
    ObjectsListComponent,
    ObjectsDetailsComponent,
    ObjectsDatabaseComponent,
    ObjectsOverviewComponent,
    ObjectsDataComponent,
    ObjectsSchemaComponent,
    ObjectsImportComponent,
    ObjectsPermissionsComponent,
    ObjectsStatsComponent,
    ObjectsBackupsComponent,
    EnginesComponent,
    EnginesListComponent,
    EnginesDetailsComponent,
    EnginesBackupsComponent,
    EnginesConfigComponent,
    EnginesInfoComponent,
    EnginesPermissionsComponent,
    EnginesDatabasesComponent,
    EnginesLogsComponent,
    EnginesSourcesComponent,
    MonitoringComponent,
    MonitoringListComponent,
    MonitoringDetailsComponent,
    MonitoringCodeComponent,
    MonitoringHistoryComponent,
    MonitoringInfoComponent,
    MonitoringPermissionsComponent,
    MonitoringScheduleComponent,
    MonitoringVersionsComponent,
    NotificationsComponent,
    NotificationsListComponent,
    NotificationsDetailsComponent,
    NotificationsCodeComponent,
    NotificationsHistoryComponent,
    NotificationsInfoComponent,
    NotificationsPermissionsComponent,
    NotificationsScheduleComponent,
    NotificationsVersionsComponent,
    SettingsComponent,
    SettingsListComponent,
    SettingsDetailsComponent,
    SettingsCodeComponent,
    SettingsHistoryComponent,
    SettingsInfoComponent,
    SettingsPermissionsComponent,
    SettingsScheduleComponent,
    SettingsVersionsComponent,
    UsersComponent,
    UsersListComponent,
    UsersDetailsComponent,
    UsersCodeComponent,
    UsersHistoryComponent,
    UsersInfoComponent,
    UsersPermissionsComponent,
    UsersScheduleComponent,
    UsersVersionsComponent,
    RolesComponent,
    RolesListComponent,
    RolesDetailsComponent,
    RolesCodeComponent,
    RolesHistoryComponent,
    RolesInfoComponent,
    RolesPermissionsComponent,
    RolesScheduleComponent,
    RolesVersionsComponent,
    UserFederationComponent,
    UserFederationListComponent,
    UserFederationDetailsComponent,
    UserFederationCodeComponent,
    UserFederationHistoryComponent,
    UserFederationInfoComponent,
    UserFederationPermissionsComponent,
    UserFederationScheduleComponent,
    UserFederationVersionsComponent,
    IdentityProvidersComponent,
    IdentityProvidersListComponent,
    IdentityProvidersDetailsComponent,
    IdentityProvidersCodeComponent,
    IdentityProvidersHistoryComponent,
    IdentityProvidersInfoComponent,
    IdentityProvidersPermissionsComponent,
    IdentityProvidersScheduleComponent,
    IdentityProvidersVersionsComponent,
    LogsComponent,
    LogsListComponent,
    LogsDetailsComponent,
    LogsCodeComponent,
    LogsHistoryComponent,
    LogsInfoComponent,
    LogsPermissionsComponent,
    LogsScheduleComponent,
    LogsVersionsComponent,
    DataRecoveryComponent,
    DataRecoveryListComponent,
    DataRecoveryDetailsComponent,
    DataRecoveryObjectsComponent,
    DataRecoveryHistoryComponent,
    DataRecoveryInfoComponent,
    DataRecoveryPermissionsComponent,
    DataRecoveryScheduleComponent,
    DataRecoverySettingsComponent,
    SystemSelectComponent,
    NewConnectionDialogContentComponent,
    DefaultDatabaseComponent,
    NewDefaultDialogContentComponent,
    ResultsComponent,
    DummyButtonComponent,
    DummyIconButtonComponent,
    NavRailComponent,
    ConnectionSelectComponent,
    ConnectionDialogContentComponent,
  ],
  providers: [
    {
      provide: MONACO_PATH,
      useValue: "https://unpkg.com/monaco-editor@0.19.3/min/vs"
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
    TdLoadingComponent,
    NewConnectionDialogContentComponent,
    ConnectionDialogContentComponent,
    NewDefaultDialogContentComponent
  ]
})
export class AppModule {}
