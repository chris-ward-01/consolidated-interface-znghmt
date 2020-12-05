import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'editor',
        component: EditorComponent,
      },
      {
        path: 'scripts',
        component: ScriptsComponent,
        children: [
          {
            path: '',
            component: ScriptsListComponent,
          },
          {
            path: 'details',
            component: ScriptsDetailsComponent,
            children: [
              {
                path: '',
                component: ScriptInfoComponent,
              },
              {
                path: 'history',
                component: ScriptHistoryComponent,
              },
              {
                path: 'code',
                component: ScriptCodeComponent,
              },
              {
                path: 'info',
                component: ScriptInfoComponent,
              },
              {
                path: 'permissions',
                component: ScriptPermissionsComponent,
              },
              {
                path: 'schedule',
                component: ScriptScheduleComponent,
              },
              {
                path: 'versions',
                component: ScriptVersionsComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'objects',
        component: ObjectsComponent,
        children: [
          {
            path: '',
            component: ObjectsListComponent,
          },
          {
            path: 'database',
            component: ObjectsDatabaseComponent,
          },
          {
            path: 'details',
            component: ObjectsDetailsComponent,
            children: [
              {
                path: '',
                component: ObjectsOverviewComponent,
              },
              {
                path: 'data',
                component: ObjectsDataComponent,
              },
              {
                path: 'schema',
                component: ObjectsSchemaComponent,
              },
              {
                path: 'stats',
                component: ObjectsStatsComponent,
              },
              {
                path: 'import',
                component: ObjectsImportComponent,
              },
              {
                path: 'permissions',
                component: ObjectsPermissionsComponent,
              },
              {
                path: 'backups',
                component: ObjectsBackupsComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'engines',
        component: EnginesComponent,
        children: [
          {
            path: '',
            component: EnginesListComponent,
          },
          {
            path: 'details',
            component: EnginesDetailsComponent,
            children: [
              {
                path: '',
                component: EnginesInfoComponent,
              },
              {
                path: 'data-recovery',
                component: EnginesBackupsComponent,
              },
              {
                path: 'config',
                component: EnginesConfigComponent,
              },
              {
                path: 'info',
                component: EnginesInfoComponent,
              },
              {
                path: 'databases',
                component: EnginesDatabasesComponent,
              },
              {
                path: 'logs',
                component: EnginesLogsComponent,
              },
              {
                path: 'permissions',
                component: EnginesPermissionsComponent,
              },
              {
                path: 'sources',
                component: EnginesSourcesComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'monitoring',
        component: MonitoringComponent,
          children: [
          {
            path: '',
            component: MonitoringListComponent,
          },
          {
            path: 'details',
            component: MonitoringDetailsComponent,
            children: [
              {
                path: '',
                component: MonitoringInfoComponent,
              },
              {
                path: 'history',
                component: MonitoringHistoryComponent,
              },
              {
                path: 'code',
                component: MonitoringCodeComponent,
              },
              {
                path: 'info',
                component: MonitoringInfoComponent,
              },
              {
                path: 'permissions',
                component: MonitoringPermissionsComponent,
              },
              {
                path: 'schedule',
                component: MonitoringScheduleComponent,
              },
              {
                path: 'versions',
                component: MonitoringVersionsComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
        children: [
          {
            path: '',
            component: NotificationsListComponent,
          },
          {
            path: 'details',
            component: NotificationsDetailsComponent,
            children: [
              {
                path: '',
                component: NotificationsInfoComponent,
              },
              {
                path: 'history',
                component: NotificationsHistoryComponent,
              },
              {
                path: 'code',
                component: NotificationsCodeComponent,
              },
              {
                path: 'info',
                component: NotificationsInfoComponent,
              },
              {
                path: 'permissions',
                component: NotificationsPermissionsComponent,
              },
              {
                path: 'schedule',
                component: NotificationsScheduleComponent,
              },
              {
                path: 'versions',
                component: NotificationsVersionsComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          {
            path: '',
            component: SettingsListComponent,
          },
          {
            path: 'details',
            component: SettingsDetailsComponent,
            children: [
              {
                path: '',
                component: SettingsInfoComponent,
              },
              {
                path: 'history',
                component: SettingsHistoryComponent,
              },
              {
                path: 'code',
                component: SettingsCodeComponent,
              },
              {
                path: 'info',
                component: SettingsInfoComponent,
              },
              {
                path: 'preferences',
                component: SettingsPermissionsComponent,
              },
              {
                path: 'schedule',
                component: SettingsScheduleComponent,
              },
              {
                path: 'versions',
                component: SettingsVersionsComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {
            path: '',
            component: UsersListComponent,
          },
          {
            path: 'details',
            component: UsersDetailsComponent,
            children: [
              {
                path: '',
                component: UsersInfoComponent,
              },
              {
                path: 'audit',
                component: UsersHistoryComponent,
              },
              {
                path: 'code',
                component: UsersCodeComponent,
              },
              {
                path: 'info',
                component: UsersInfoComponent,
              },
              {
                path: 'permissions',
                component: UsersPermissionsComponent,
              },
              {
                path: 'schedule',
                component: UsersScheduleComponent,
              },
              {
                path: 'roles',
                component: UsersVersionsComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'roles',
        component: RolesComponent,
        children: [
          {
            path: '',
            component: RolesListComponent,
          },
          {
            path: 'details',
            component: RolesDetailsComponent,
            children: [
              {
                path: '',
                component: RolesInfoComponent,
              },
              {
                path: 'history',
                component: RolesHistoryComponent,
              },
              {
                path: 'code',
                component: RolesCodeComponent,
              },
              {
                path: 'info',
                component: RolesInfoComponent,
              },
              {
                path: 'permissions',
                component: RolesPermissionsComponent,
              },
              {
                path: 'schedule',
                component: RolesScheduleComponent,
              },
              {
                path: 'versions',
                component: RolesVersionsComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'user-federation',
        component: UserFederationComponent,
        children: [
          {
            path: '',
            component: UserFederationListComponent,
          },
          {
            path: 'details',
            component: UserFederationDetailsComponent,
            children: [
              {
                path: '',
                component: UserFederationInfoComponent,
              },
              {
                path: 'history',
                component: UserFederationHistoryComponent,
              },
              {
                path: 'code',
                component: UserFederationCodeComponent,
              },
              {
                path: 'info',
                component: UserFederationInfoComponent,
              },
              {
                path: 'permissions',
                component: UserFederationPermissionsComponent,
              },
              {
                path: 'schedule',
                component: UserFederationScheduleComponent,
              },
              {
                path: 'versions',
                component: UserFederationVersionsComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'identity-providers',
        component: IdentityProvidersComponent,
        children: [
          {
            path: '',
            component: IdentityProvidersListComponent,
          },
          {
            path: 'details',
            component: IdentityProvidersDetailsComponent,
            children: [
              {
                path: '',
                component: IdentityProvidersInfoComponent,
              },
              {
                path: 'history',
                component: IdentityProvidersHistoryComponent,
              },
              {
                path: 'code',
                component: IdentityProvidersCodeComponent,
              },
              {
                path: 'info',
                component: IdentityProvidersInfoComponent,
              },
              {
                path: 'permissions',
                component: IdentityProvidersPermissionsComponent,
              },
              {
                path: 'schedule',
                component: IdentityProvidersScheduleComponent,
              },
              {
                path: 'versions',
                component: IdentityProvidersVersionsComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'logs',
        component: LogsComponent,
        children: [
          {
            path: '',
            component: LogsListComponent,
          },
          {
            path: 'details',
            component: LogsDetailsComponent,
            children: [
              {
                path: '',
                component: LogsInfoComponent,
              },
              {
                path: 'history',
                component: LogsHistoryComponent,
              },
              {
                path: 'code',
                component: LogsCodeComponent,
              },
              {
                path: 'info',
                component: LogsInfoComponent,
              },
              {
                path: 'permissions',
                component: LogsPermissionsComponent,
              },
              {
                path: 'schedule',
                component: LogsScheduleComponent,
              },
              {
                path: 'versions',
                component: LogsVersionsComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'data-recovery',
        component: DataRecoveryComponent,
        children: [
          {
            path: '',
            component: DataRecoveryListComponent,
          },
          {
            path: 'details',
            component: DataRecoveryDetailsComponent,
            children: [
              {
                path: '',
                component: DataRecoveryInfoComponent,
              },
              {
                path: 'history',
                component: DataRecoveryHistoryComponent,
              },
              {
                path: 'objects',
                component: DataRecoveryObjectsComponent,
              },
              {
                path: 'info',
                component: DataRecoveryInfoComponent,
              },
              {
                path: 'permissions',
                component: DataRecoveryPermissionsComponent,
              },
              {
                path: 'schedule',
                component: DataRecoveryScheduleComponent,
              },
              {
                path: 'settings',
                component: DataRecoverySettingsComponent,
              },
            ],
          },
        ],
      },
    ],
  },
  { path: '**', redirectTo: '/' },
];

export const appRoutingProviders: any[] = [];

export const appRoutes: any = RouterModule.forRoot(routes);
