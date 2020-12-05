import { Component, OnInit, ViewChild } from "@angular/core";
import { OBJECTS, SCRIPTS, HISTORY, ENGINES, DATABASES } from "./data.ts";
import { MatTableDataSource } from "@angular/material/table";
import {MatPaginator} from '@angular/material/paginator';
import { SelectionModel } from "@angular/cdk/collections";
import { VantageThemeService } from "@td-vantage/ui-platform/theme";

export interface Engine {
  name: string;
  description: string;
  platform: string;
  system: string;
  status: string;
  purpose: string;
  plan: string;
  usage: string;
}

const ENGINE_DATA: any[] = ENGINES;

export interface Database {
  DatabaseName: string;
  PermSpace: number;
  SpoolSpace: number;
  TempSpace: number;
  DBKind: string;
}

const DATABASES_DATA: any[] = DATABASES;

export interface Script {
  name: string;
  description: string;
  sql: string;
  system: string;
  status: string;
}

const SCRIPT_DATA: any[] = SCRIPTS;

export interface History {
  name: string;
  description: string;
  sql: string;
  system: string;
  status: string;
  start_time: string;
  end_time: string;
  duration: string;
  size: string;
  user: string;
}

const HISTORY_DATA: any[] = HISTORY;


export interface Objects {
  DataBaseName: string;
  TableName: string;
  TableKind: string;
}

const OBJECT_DATA: any[] = OBJECTS;


@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"]
})
export class OverviewComponent implements OnInit {
  _scrolled: boolean = false;
  viewHeader: boolean = true;
  selectedLab = 'production_lab';
  scripts: any[] = SCRIPTS;
  engines: any[] = ENGINES;
  // Chart data
  chart1: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  actionButtons: any[] = [
    {
      name: "SQL Queries",
      svgIcon: "td-icons:product_editor",
    },
    {
      name: "Save Scripts",
      svgIcon: "td-icons:script",
    },
    {
      name: "Manage Objects",
      svgIcon: "td-icons:database_search",
    },
    {
      name: "Monitoring",
      icon: "bar_chart",
    },
    {
      name: "SQL Engines",
      icon: "memory",
    },
    {
      name: "Identity & SSO",
      icon: "people",
    },
    {
      name: "Backups",
      icon: "cloud_download",
    },
  ];

  roles: any[] = [
    {
      name: "db_admin_emea",
      description: "EMEA dba role",
      count: "185"
    },
    {
      name: "db_admin_emea",
      description: "EMEA dba role",
      count: "143"
    },
    {
      name: "db_admin_emea",
      description: "EMEA dba role",
      count: "97"
    },
    {
      name: "db_admin_emea",
      description: "EMEA dba role",
      count: "78"
    },
    {
      name: "db_admin_emea",
      description: "EMEA dba role",
      count: "44"
    },
  ];

  history: History[] = [
    {
      system: "Vantage-Dev",
      name: "Crimes analysis",
      description: "Times, locations, and description",
      sql: "SELECT REGEXP_REPLACE(location, '^.+[/\\]', '') as Name",
      status: "Running",
      start_time: "blah",
      end_time: "blah",
      duration: "blah",
      user: "blah",
      size: "blah"
    },
    {
      system: "system",
      name: "Script",
      description: "Script description",
      sql: "SELECT Location, ObjectLength FROM READ_NOS (",
      status: "Running",
      start_time: "blah",
      end_time: "blah",
      duration: "blah",
      user: "blah",
      size: "blah"
    },
    {
      system: "system",
      name: "Script",
      description: "Script description",
      sql: "SELECT Payload FROM READ_NOS (",
      status: "Running",
      start_time: "blah",
      end_time: "blah",
      duration: "blah",
      user: "blah",
      size: "blah"
    },
    {
      system: "system",
      name: "Script",
      description: "Script description",
      sql: "CREATE AUTHORIZATION Auth_S3_Def",
      status: "Running",
      start_time: "blah",
      end_time: "blah",
      duration: "blah",
      user: "blah",
      size: "blah"
    },
    {
      system: "system",
      name: "Script",
      description: "Script description",
      sql: "CREATE MULTISET FOREIGN TABLE NOS_TEST.demo_csv_foreign_table ,FALLBACK ,",
      status: "Running",
      start_time: "blah",
      end_time: "blah",
      duration: "blah",
      user: "blah",
      size: "blah"
    },
    {
      system: "system",
      name: "Script",
      description: "Script description",
      sql: "SELECT location(CHAR(100)), ObjectLength FROM READ_NOS (",
      status: "Running",
      start_time: "blah",
      end_time: "blah",
      duration: "blah",
      user: "blah",
      size: "blah"
    }
  ];

  scripts: History[] = [
    {
      system: "Vantage-Dev",
      name: "Crimes analysis",
      description: "Times, locations, and description",
      sql: "SELECT REGEXP_REPLACE(location, '^.+[/\\]', '') as Name",
      status: "Running",
      start_time: "blah",
      end_time: "blah",
      duration: "blah",
      user: "blah",
      size: "blah"
    },
    {
      system: "system",
      name: "Script",
      description: "Script description",
      sql: "SELECT Location, ObjectLength FROM READ_NOS (",
      status: "Running",
      start_time: "blah",
      end_time: "blah",
      duration: "blah",
      user: "blah",
      size: "blah"
    },
    {
      system: "system",
      name: "Script",
      description: "Script description",
      sql: "SELECT Payload FROM READ_NOS (",
      status: "Running",
      start_time: "blah",
      end_time: "blah",
      duration: "blah",
      user: "blah",
      size: "blah"
    },
    {
      system: "system",
      name: "Script",
      description: "Script description",
      sql: "CREATE AUTHORIZATION Auth_S3_Def",
      status: "Running",
      start_time: "blah",
      end_time: "blah",
      duration: "blah",
      user: "blah",
      size: "blah"
    },
    {
      system: "system",
      name: "Script",
      description: "Script description",
      sql: "CREATE MULTISET FOREIGN TABLE NOS_TEST.demo_csv_foreign_table ,FALLBACK ,",
      status: "Running",
      start_time: "blah",
      end_time: "blah",
      duration: "blah",
      user: "blah",
      size: "blah"
    },
    {
      system: "system",
      name: "Script",
      description: "Script description",
      sql: "SELECT location(CHAR(100)), ObjectLength FROM READ_NOS (",
      status: "Running",
      start_time: "blah",
      end_time: "blah",
      duration: "blah",
      user: "blah",
      size: "blah"
    }
  ];

  constructor(
    private _themeService: VantageThemeService
  ) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;

    // chart1
    this.chart1 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    grid: {
      borderColor: 'transparent',
      show: false,
      left: '18%',
      right: '18%',
      bottom: '18%',
      top: '15%',
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        },
        show: false
    },
    legend: {
        data:['蒸发量','降水量','平均温度'],
        show: false,
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: '#aaa',
              },
            },
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#aaa',
              },
            },
            name: 'Vantage Units',
            min: 0,
            max: 100,
            interval: 50,
            axisLabel: {
                formatter: '{value}%'
            },
            splitLine: {
                show: false
            }
        },
        {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#aaa',
              },
            },
            name: 'Terabyte Hours',
            min: 0,
            max: 100,
            interval: 25,
            axisLabel: {
                formatter: '{value}%'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0.03)'
                }
            }
        }
    ],
    series: [
        {
            name:'CPU',
            type:'bar',
            data: [
                {
                    value: 15.3,
                    itemStyle: {color: 'rgba(76, 175, 177, 0.75)'},
                },
                {
                    value: 16.5,
                    itemStyle: {color: 'rgba(76, 175, 177, 0.75)'},
                },
                {
                    value: 25,
                    itemStyle: {color: 'rgba(76, 175, 177, 0.75)'},
                },
                {
                    value: 35.6,
                    itemStyle: {color: 'rgba(76, 175, 177, 0.75)'},
                },
                {
                    value: 37.8,
                    itemStyle: { color: 'rgba(76, 175, 177, 0.75)' },
                },
                {
                    value: 48,
                    itemStyle: { color: 'rgba(76, 175, 177, 0.75)' },
                },
                {
                    value: 56,
                    itemStyle: { color: 'rgba(76, 175, 177, 0.75)' },
                },
                {
                    value: 64,
                    itemStyle: { color: 'rgba(76, 175, 177, 0.75)' },
                },
                {
                    value: 72,
                    itemStyle: { color: 'rgba(76, 175, 177, 0.75)' },
                },
                {
                    value: 80,
                    itemStyle: { color: '#F4774D' },
                },
                {
                    value: 96,
                    itemStyle: {color: 'rgba(0,0,0,0.5)'},
                },
                {
                    value: 100,
                    itemStyle: {color: 'rgba(0,0,0,0.5)'},
                }
            ],
        },
        {
            name:'Vantage Units',
            type:'line',
            itemStyle: {color: '#F6C863'},
            yAxisIndex: 1,
            data: [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 96, 100]
        }
    ]
    };
  }

  get selectedRowNum() {
    return this.selection.selected.length;
  }

  displayedColumns: string[] = ["DatabaseName", "SpoolSpace"];

  dataSource = new MatTableDataSource<Database>(DATABASES_DATA);
  selection = new SelectionModel<Database>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  clearAllSelections() {
    this.selection.clear();
  }
  
}
