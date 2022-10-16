import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { ChartEChartsEvent, ChartEChartsOption } from '@delon/chart/chart-echarts';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import * as echart from 'echarts';

@Component({
  selector: 'app-mycharts-log',
  templateUrl: './log.component.html'
})
export class MychartsLogComponent implements OnInit {
  constructor(private http: _HttpClient, private modal: ModalHelper) {}

  ngOnInit(): void {
    this.option1 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['Evaporation', 'Precipitation', 'Temperature']
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Precipitation',
          interval: 50,
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: 'Temperature',
          interval: 5,
          axisLabel: {
            formatter: '{value} °C'
          }
          // position:'left'
        },
        {
          type: 'value',
          name: 'Temperature2',
          interval: 20,
          //设置y轴偏移量
          offset: 80,
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: [
        {
          name: 'Evaporation',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: any) {
              return `${value} ml`;
            }
          },
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          itemStyle: {
            barBorderRadius: 7
          },
          //显示柱子内的文字
          label: {
            show: true,
            position: 'inside',
            // {c}会自动的解析为 数据 data里面的数据
            formatter: '{c} ml'
          }
        },
        {
          name: 'Precipitation',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: any) {
              return `${value} ml`;
            }
          },
          data: [-2.6, -5.9, -9.0, -26.4, -28.7, -70.7, -175.6, -182.2, -48.7, -18.8, -6.0, -2.3],
          //设置柱子重叠
          barGap: '-100%',
          itemStyle: {
            color: 'none',
            borderColor: '#00c1de',
            borderWidth: 3,
            borderRadius: 10
          },
          //显示柱子内的文字
          label: {
            show: true,
            position: 'inside',
            // {c}会自动的解析为 数据 data里面的数据
            formatter: '{c} ml'
          }
        },
        {
          name: 'Temperature',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value: any) {
              return `${value} °C`;
            }
          },
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        },
        {
          name: 'Temperature',
          type: 'line',
          yAxisIndex: 2,
          tooltip: {
            valueFormatter: function (value: any) {
              return `${value} °C`;
            }
          },
          data: [12.0, 12.2, 13.3, 14.5, 16.3, 110.2, 120.3, 123.4, 123.0, 116.5, 112.0, 16.2]
        }
      ]
    };
    this.cardWidth = this.w();
  }

  add(): void {}

  dark = false;
  two = true;

  option1: ChartEChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['Evaporation', 'Precipitation', 'Temperature']
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Precipitation',
        interval: 50,
        axisLabel: {
          formatter: '{value} ml'
        }
      },
      {
        type: 'value',
        name: 'Temperature',
        interval: 5,
        axisLabel: {
          formatter: '{value} °C'
        }
        // position:'left'
      },
      {
        type: 'value',
        name: 'Temperature2',
        interval: 20,
        //设置y轴偏移量
        offset: 80,
        axisLabel: {
          formatter: '{value} °C'
        }
      }
    ],
    series: [
      {
        name: 'Evaporation',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value: any) {
            return `${value} ml`;
          }
        },
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        itemStyle: {
          barBorderRadius: 7
        },
        //显示柱子内的文字
        label: {
          show: true,
          position: 'inside',
          // {c}会自动的解析为 数据 data里面的数据
          formatter: '{c} ml'
        }
      },
      {
        name: 'Precipitation',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value: any) {
            return `${value} ml`;
          }
        },
        data: [-2.6, -5.9, -9.0, -26.4, -28.7, -70.7, -175.6, -182.2, -48.7, -18.8, -6.0, -2.3],
        //设置柱子重叠
        barGap: '-100%',
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
          borderRadius: 10
        },
        //显示柱子内的文字
        label: {
          show: true,
          position: 'inside',
          // {c}会自动的解析为 数据 data里面的数据
          formatter: '{c} ml'
        }
      },
      {
        name: 'Temperature',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value: any) {
            return `${value} °C`;
          }
        },
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      },
      {
        name: 'Temperature',
        type: 'line',
        yAxisIndex: 2,
        tooltip: {
          valueFormatter: function (value: any) {
            return `${value} °C`;
          }
        },
        data: [12.0, 12.2, 13.3, 14.5, 16.3, 110.2, 120.3, 123.4, 123.0, 116.5, 112.0, 16.2]
      }
    ]
  };

  option2: ChartEChartsOption = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };

  cardWidth: string = '';

  handleEvents(ev: ChartEChartsEvent): void {
    console.log(ev);
  }

  w() {
    let w = window.screen.width - 300;
    // let w = mycard.clientWidth;
    return `${w}px`;
  }

  @HostListener('window:resize', ['$event'])
  onpageresize(event: any) {
    const mycard = document.getElementById('mycard') as HTMLElement;
    console.log(mycard.clientWidth);
    this.cardWidth = `${mycard.clientWidth - 200}px`;
    console.log('resize-----');

    this.option1 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['Evaporation', 'Precipitation', 'Temperature']
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Precipitation',
          interval: 50,
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: 'Temperature',
          interval: 5,
          axisLabel: {
            formatter: '{value} °C'
          }
          // position:'left'
        },
        {
          type: 'value',
          name: 'Temperature2',
          interval: 20,
          //设置y轴偏移量
          offset: 80,
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: [
        {
          name: 'Evaporation',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: any) {
              return `${value} ml`;
            }
          },
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          itemStyle: {
            barBorderRadius: 7
          },
          //显示柱子内的文字
          label: {
            show: true,
            position: 'inside',
            // {c}会自动的解析为 数据 data里面的数据
            formatter: '{c} ml'
          }
        },
        {
          name: 'Precipitation',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: any) {
              return `${value} ml`;
            }
          },
          data: [-2.6, -5.9, -9.0, -26.4, -28.7, -70.7, -175.6, -182.2, -48.7, -18.8, -6.0, -2.3],
          //设置柱子重叠
          barGap: '-100%',
          itemStyle: {
            color: 'none',
            borderColor: '#00c1de',
            borderWidth: 3,
            borderRadius: 10
          },
          //显示柱子内的文字
          label: {
            show: true,
            position: 'inside',
            // {c}会自动的解析为 数据 data里面的数据
            formatter: '{c} ml'
          }
        },
        {
          name: 'Temperature',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value: any) {
              return `${value} °C`;
            }
          },
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        },
        {
          name: 'Temperature',
          type: 'line',
          yAxisIndex: 2,
          tooltip: {
            valueFormatter: function (value: any) {
              return `${value} °C`;
            }
          },
          data: [12.0, 12.2, 13.3, 14.5, 16.3, 110.2, 120.3, 123.4, 123.0, 116.5, 112.0, 16.2]
        }
      ]
    };
    this.option2 = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };
  }
}
