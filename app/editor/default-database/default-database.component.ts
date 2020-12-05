import { Component, OnInit, Input } from "@angular/core";
import { TdDialogService } from "@covalent/core/dialogs";
import { MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { DEFAULTDB, DefaultDatabase } from "../default-databases";

@Component({
  selector: "app-draggable-demo",
  template: `
    <div layout="column" layout-fill>
      <div flex layout="column">
        <mat-card-title>Create Connection</mat-card-title>
        <mat-card-content
          class="pad-top pad-right-xs pad-bottom pad-left-xs"
          flex
        >
          <div layout="row" flex>
            <mat-form-field flex appearance="outline">
              <mat-label>Select System</mat-label>
              <mat-select>
                <mat-option [value]="1">vantage_prod</mat-option>
                <mat-option [value]="2">vantage_dev</mat-option>
                <mat-option [value]="3">vantage_qa</mat-option>
                <mat-option [value]="3">other_system_prod</mat-option>
                <mat-option [value]="3">other_system_dev</mat-option>
              </mat-select>
            </mat-form-field>
          </div>
          <div class="push-bottom">
            <mat-radio-group
              #radioGroup="matRadioGroup"
              [value]="true"
              layout="column"
            >
              <mat-radio-button class="push-xs" [value]="true"
                >Use Active Session: Phillip Dominguez</mat-radio-button
              >
              <mat-radio-button *ngIf="true" class="push-xs" [value]="false">
                Enter Credentials
              </mat-radio-button>
            </mat-radio-group>
          </div>
          <!-- <form #form="ngForm">
              <ng-container *ngIf="radioGroup.value">
                <div layout="row">
                  <mat-form-field flex>
                    <input
                      matInput
                      placeholder="Username"
                      type="text"
                      name="username"
                      required
                    />
                  </mat-form-field>
                </div>
                <div layout="row" class="push-top-sm">
                  <mat-form-field flex>
                    <input
                      matInput
                      placeholder="Password"
                      type="password"
                      name="password"
                      required
                    />
                  </mat-form-field>
                </div>
              </ng-container>
            </form> -->
        </mat-card-content>
        <div
          layout="row"
          layout-align="end center"
          class="pull-right-lg pull-bottom-sm"
        >
          <button
            data-cy="cancel-button"
            mat-button
            class="text-upper"
            (click)="dialog.close()"
          >
            {{ "CANCEL" }}
          </button>
          <button
            data-cy="submit-cred-button"
            mat-button
            color="primary"
            class="text-upper"
            (click)="dialog.close()"
          >
            {{ "CONNECT" }}
          </button>
        </div>
      </div>
    </div>
  `
})
export class NewDefaultDialogContentComponent {
  constructor(
    public dialog: MatDialogRef<NewDefaultDialogContentComponent>
  ) {}
}

@Component({
  selector: "app-default-database",
  templateUrl: "./default-database.component.html",
  styleUrls: ["./default-database.component.scss"]
})
export class DefaultDatabaseComponent implements OnInit {
  @Input() connections: DefaultDatabase[];

  activeConnection: string = "db-0";
  constructor(private _tdDialgoService: TdDialogService) {}
  newConnectionConfig: MatDialogConfig = {};

  ngOnInit() {}

  get activeConnectionMetadata() {
    return this.connections.find(
      connection => connection.value === this.activeConnection
    );
  }

  stopProp(e: Event): void {
    console.log(e);
    e.preventDefault;
    e.stopImmediatePropagation();
    e.stopPropagation();
  }

  openNewConnectionDialog(): void {
    this._tdDialgoService.open(NewDefaultDialogContentComponent, {
      minWidth: 400
    });
  }
}
