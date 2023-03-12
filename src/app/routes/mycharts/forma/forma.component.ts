import {AfterViewInit, Component, OnInit} from '@angular/core';
import {_HttpClient, ModalHelper} from '@delon/theme';
import * as echart from 'echarts';

@Component({
  selector: 'app-mycharts-forma',
  templateUrl: './forma.component.html'
})
export class MychartsFormaComponent implements OnInit,AfterViewInit {

  constructor(private http: _HttpClient, private modal: ModalHelper) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const myDemo =  echart.init(document.getElementById("myecharts") as HTMLElement);
    myDemo.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
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
    })
  }



}
