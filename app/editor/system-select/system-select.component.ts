import { Component, OnInit, Input } from "@angular/core";
import { TdDialogService } from "@covalent/core/dialogs";
import { MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { Connection } from "../connections";

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
          <div layout="row" class="push-top-sm push-bottom">
            <mat-form-field flex appearance="outline">
              <mat-label>Default database</mat-label>
              <input
                matInput
                placeholder="Default database"
                name="default"
              />
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
export class NewConnectionDialogContentComponent {
  constructor(
    public dialog: MatDialogRef<NewConnectionDialogContentComponent>
  ) {}
}

@Component({
  selector: "app-system-select",
  templateUrl: "./system-select.component.html",
  styleUrls: ["./system-select.component.scss"]
})
export class SystemSelectComponent implements OnInit {
  @Input() connections: Connection[];

  activeConnection: string = "connections-0";
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
    this._tdDialgoService.open(NewConnectionDialogContentComponent, {
      minWidth: 400
    });
  }
}
