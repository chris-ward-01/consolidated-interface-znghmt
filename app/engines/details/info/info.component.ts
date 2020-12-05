import { Component, OnInit } from "@angular/core";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Tag {
  name: string;
}

@Component({
  selector: "app-engines-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"],
  preserveWhitespaces: true, 
})
export class EnginesInfoComponent implements OnInit {
  chart1: any;

  constructor() {}

  ngOnInit() {
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
      left: '8%',
      right: '8%',
      bottom: '12%',
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
            name:'Vantage Units',
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
            name:'Terabyte Hours',
            type:'line',
            itemStyle: {color: '#F6C863'},
            yAxisIndex: 1,
            data: [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 96, 100]
        }
    ]
    };
  }
}
