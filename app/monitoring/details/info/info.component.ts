import { Component, OnInit } from "@angular/core";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Tag {
  name: string;
}

@Component({
  selector: "app-monitoring-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"],
  preserveWhitespaces: true, 
})
export class MonitoringInfoComponent implements OnInit {
  chart1: any;
  chart2: any;
  chart3: any;
  chart4: any;
  chart5: any;
  chart6: any;
  chart7: any;
  chart8: any;

  constructor() {}

  ngOnInit(): void {
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
        left: '10%',
        right: '10%',
        bottom: '15%',
        top: '15%',
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        },
        show: false
      },
      legend: {
        data: ['蒸发量', '降水量', '平均温度'],
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
          name: 'Actual',
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
          name: 'Target',
          min: 0,
          max: 100,
          interval: 5,
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
          name: 'Systems on GCA',
          type: 'bar',
          data: [
            {
              value: 15.3,
              itemStyle: { color: '#3F97C4' },
            },
            {
              value: 16.5,
              itemStyle: { color: '#3F97C4' },
            },
            {
              value: 25,
              itemStyle: { color: '#3F97C4' },
            },
            {
              value: 35.6,
              itemStyle: { color: '#3F97C4' },
            },
            {
              value: 37.8,
              itemStyle: { color: '#F4774D' },
            },
            {
              value: 48,
              itemStyle: { color: 'rgba(0,0,0,0.1)' },
            },
            {
              value: 56,
              itemStyle: { color: 'rgba(0,0,0,0.1)' },
            },
            {
              value: 64,
              itemStyle: { color: 'rgba(0,0,0,0.1)' },
            },
            {
              value: 72,
              itemStyle: { color: 'rgba(0,0,0,0.1)' },
            },
            {
              value: 80,
              itemStyle: { color: 'rgba(0,0,0,0.1)' },
            },
            {
              value: 96,
              itemStyle: { color: 'rgba(0,0,0,0.1)' },
            },
            {
              value: 100,
              itemStyle: { color: 'rgba(0,0,0,0.1)' },
            }
          ],
        },
        {
          name: 'Target',
          type: 'line',
          itemStyle: { color: '#F6C863' },
          yAxisIndex: 1,
          data: [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 96, 100]
        }
      ]
    };
    //chart2
    this.chart2 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['Promoters', 'Detractors']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '6%',
        containLabel: true,
        show: false,
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#aaa',
          },
        },
      },
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#aaa',
          },
        },
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      },
      series: [
        {
          name: 'Detractors',
          type: 'bar',
          stack: '总量',
          itemStyle: { color: '#F4774D' },
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [-23, -16, -17, -22, -15, -17, -18]
        },
        {
          name: 'Promoters',
          type: 'bar',
          itemStyle: { color: '#3F97C4' },
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [68, 58, 61, 57, 62, 59, 58]
        },

      ]
    };
    //chart3
    this.chart3 = {
      title: {
        text: '堆叠区域图'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Apps', 'Dashboards', 'Notebooks', 'Reports', 'Scripts']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '6%',
        containLabel: true,
        borderColor: 'transparent',
      },
      xAxis: [
        {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#aaa',
            },
          },
          boundaryGap: false,
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
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
        }
      ],
      series: [
        {
          name: 'Reports',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          itemStyle: { color: '#313945' },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Dashboards',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          itemStyle: { color: '#3F97C4' },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Notebooks',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          itemStyle: { color: '#6BBFC0' },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Scripts',
          type: 'line',
          stack: '总量',
          itemStyle: { color: '#F6C863' },
          areaStyle: { normal: {} },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Apps',
          type: 'line',
          stack: '总量',
          itemStyle: { color: '#F4774D' },
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: { normal: {} },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    //chart4
    this.chart4 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['Apps', 'Dashboards', 'Notebooks', 'Reports', 'Scripts']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '6%',
        containLabel: true,
        borderColor: 'transparent',
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#aaa',
          },
        },
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisLine: {
          lineStyle: {
            color: '#aaa',
          },
        },
      },
      series: [
        {
          name: 'Scripts',
          type: 'bar',
          stack: '总量',
          itemStyle: { color: '#F6C863' },
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [23, 16, 17, 22, 15, 17, 18]
        },
        {
          name: 'Reports',
          type: 'bar',
          stack: '总量',
          itemStyle: { color: '#313945' },
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [23, 16, 17, 22, 15, 17, 18]
        },
        {
          name: 'Notebooks',
          type: 'bar',
          stack: '总量',
          itemStyle: { color: '#6BBFC0' },
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [23, 16, 17, 22, 15, 17, 18]
        },
        {
          name: 'Dashboards',
          type: 'bar',
          stack: '总量',
          itemStyle: { color: '#3F97C4' },
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [23, 16, 17, 22, 15, 17, 18]
        },
        {
          name: 'Apps',
          type: 'bar',
          itemStyle: { color: '#F4774D' },
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [68, 58, 61, 57, 62, 59, 58]
        },

      ]
    };
    // chart 6
    this.chart6 = {
      tooltip: {
        "show": true
      },
      legend: {
        "right": 10,
        "data": [
          "1990",
          "2015"
        ]
      },
      grid: {
        borderColor: 'transparent',
        show: false,
        left: '10%',
        right: '6%',
        bottom: '15%',
        top: '10%',
      },
      xAxis: [
        {
          "show": true,
          axisLine: {
            lineStyle: {
              color: '#aaa',
            },
          },
          splitLine: {
            show: false
          },
        }
      ],
      yAxis: [
        {
          "show": true,
          axisLine: {
            lineStyle: {
              color: '#aaa',
            },
          },
        }
      ],
      series: [
        {
          "name": "1990",
          "data": [
            [
              28604,
              77,
              17096869,
              "Australia",
              1990
            ],
            [
              31163,
              77.4,
              27662440,
              "Canada",
              1990
            ],
            [
              1516,
              68,
              1154605773,
              "China",
              1990
            ],
            [
              13670,
              74.7,
              10582082,
              "Cuba",
              1990
            ],
            [
              28599,
              75,
              4986705,
              "Finland",
              1990
            ],
            [
              29476,
              77.1,
              56943299,
              "France",
              1990
            ],
            [
              31476,
              75.4,
              78958237,
              "Germany",
              1990
            ],
            [
              28666,
              78.1,
              254830,
              "Iceland",
              1990
            ],
            [
              1777,
              57.7,
              870601776,
              "India",
              1990
            ],
            [
              29550,
              79.1,
              122249285,
              "Japan",
              1990
            ],
            [
              2076,
              67.9,
              20194354,
              "North Korea",
              1990
            ],
            [
              12087,
              72,
              42972254,
              "South Korea",
              1990
            ],
            [
              24021,
              75.4,
              3397534,
              "New Zealand",
              1990
            ],
            [
              43296,
              76.8,
              4240375,
              "Norway",
              1990
            ],
            [
              10088,
              70.8,
              38195258,
              "Poland",
              1990
            ],
            [
              19349,
              69.6,
              147568552,
              "Russia",
              1990
            ],
            [
              10670,
              67.3,
              53994605,
              "Turkey",
              1990
            ],
            [
              26424,
              75.7,
              57110117,
              "United Kingdom",
              1990
            ],
            [
              37062,
              75.4,
              252847810,
              "United States",
              1990
            ]
          ],
          "type": "scatter",
          "itemStyle": {
            "opacity": 0.75,
            "color": "#F4774D"
          },
          "label": {
            "show": true,
            "position": "top"
          }
        },
        {
          "name": "2015",
          "data": [
            [
              44056,
              81.8,
              23968973,
              "Australia",
              2015
            ],
            [
              43294,
              81.7,
              35939927,
              "Canada",
              2015
            ],
            [
              13334,
              76.9,
              1376048943,
              "China",
              2015
            ],
            [
              21291,
              78.5,
              11389562,
              "Cuba",
              2015
            ],
            [
              38923,
              80.8,
              5503457,
              "Finland",
              2015
            ],
            [
              37599,
              81.9,
              64395345,
              "France",
              2015
            ],
            [
              44053,
              81.1,
              80688545,
              "Germany",
              2015
            ],
            [
              42182,
              82.8,
              329425,
              "Iceland",
              2015
            ],
            [
              5903,
              66.8,
              1311050527,
              "India",
              2015
            ],
            [
              36162,
              83.5,
              126573481,
              "Japan",
              2015
            ],
            [
              1390,
              71.4,
              25155317,
              "North Korea",
              2015
            ],
            [
              34644,
              80.7,
              50293439,
              "South Korea",
              2015
            ],
            [
              34186,
              80.6,
              4528526,
              "New Zealand",
              2015
            ],
            [
              64304,
              81.6,
              5210967,
              "Norway",
              2015
            ],
            [
              24787,
              77.3,
              38611794,
              "Poland",
              2015
            ],
            [
              23038,
              73.13,
              143456918,
              "Russia",
              2015
            ],
            [
              19360,
              76.5,
              78665830,
              "Turkey",
              2015
            ],
            [
              38225,
              81.4,
              64715810,
              "United Kingdom",
              2015
            ],
            [
              53354,
              79.1,
              321773631,
              "United States",
              2015
            ]
          ],
          "type": "scatter",
          "itemStyle": {
            "opacity": 0.75,
            "color": "#1B98C6"
          },
          "label": {
            "show": true,
            "position": "top"
          }
        }
      ]
    }

    // chart8
    this.chart8 = {
      title: {
        text: '',
        subtext: ''
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Americas', 'EMEA', 'APAC']
      },
      toolbox: {
        show: false,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#aaa',
            },
          },
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#aaa',
            },
          }
        }
      ],
      series: [
        {
          name: 'Americas',
          type: 'bar',
          itemStyle: { color: '#3F97C4' },
          data: [162.0, 114.9, 127.0, 113.2, 65.6],
          markPoint: {
            data: [
              { name: '年最低', value: 65.6, xAxis: 4, yAxis: 65.6 },
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' }
            ]
          }
        },
        {
          name: 'EMEA',
          type: 'bar',
          itemStyle: { color: '#F4774D' },
          data: [92.0, 74.9, 79.0, 53.2, 45.6],
          markPoint: {
            data: [
              { name: '年最低', value: 45.6, xAxis: 4, yAxis: 45.6 },
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' }
            ]
          }
        },
        {
          name: 'APAC',
          type: 'bar',
          itemStyle: { color: '#4CAFB1' },
          data: [92.6, 75.9, 50.0, 46.4, 22.7],
          markPoint: {
            data: [
              { name: '年最低', value: 22.7, xAxis: 4, yAxis: 22.7 },
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' }
            ]
          }
        }
      ]
    }
  }
}
