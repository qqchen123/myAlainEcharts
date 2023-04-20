import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import {ChartEChartsOption} from "@delon/chart/chart-echarts";



@Component({
  selector: 'app-mycharts-tlist',
  templateUrl: './tlist.component.html',
  styles: [
    `
      .dynamic-delete-button {
        cursor: pointer;
        position: relative;
        top: 4px;
        font-size: 24px;
        color: #999;
        transition: all 0.3s;
      }

      .dynamic-delete-button:hover {
        color: #777;
      }

      .passenger-input {
        width: 60%;
        margin-right: 8px;
      }

      [nz-form] {
        max-width: 600px;
      }

      .add-button {
        width: 60%;
      }
    `
  ]
})
export class MychartsTlistComponent implements OnInit {

  option: ChartEChartsOption = {
    title: {
      text: '甲苯',
      textStyle: { fontSize: 20, align: 'center' },
      left: 'center',
      bottom: 0
    },
    series: {
      type: 'sunburst',
      data: [
        {
          name: '1d',
          itemStyle: { color: '#d46c6b' },
          children: [
            {
              name: '溶剂型木器涂料（含腻子）',
              value: 0.24,
              itemStyle: { color: '#d46c6b' },
              label: {},
              labelLine: { show: true },
              nodeClick: false
            },
            {
              name: '溶剂型木器涂料（含腻子）',
              value: 0.24,
              itemStyle: { color: '#d46c6b' },
              label: {},
              labelLine: { show: true },
              nodeClick: false
            },
            {
              name: '人造板',
              value: 0.61,
              itemStyle: { color: '#d46c6b' },
              label: {},
              labelLine: { show: true },
              nodeClick: false
            },
            {
              name: '人造板',
              value: 0.15,
              itemStyle: { color: '#d46c6b' },
              label: {},
              labelLine: { show: true },
              nodeClick: false
            }
          ]
        },
        {
          name: '2d',
          itemStyle: { color: '#e08654' },
          children: [
            {
              name: '溶剂型木器涂料（含腻子）',
              value: 0.21,
              itemStyle: { color: '#e08654' },
              label: {},
              nodeClick: false
            },
            {
              name: '人造板',
              value: 0.48,
              itemStyle: { color: '#e08654' },
              label: {},
              nodeClick: false
            },
            {
              name: '人造板',
              value: 0.21,
              itemStyle: { color: '#e08654' },
              label: {},
              nodeClick: false
            }
          ]
        },
        {
          name: '3d',
          itemStyle: { color: '#e4b468' },
          children: [
            {
              name: '溶剂型木器涂料（含腻子）',
              value: 0.21,
              itemStyle: { color: '#e4b468' },
              label: {},
              nodeClick: false
            },
            {
              name: '人造板',
              value: 0.45,
              itemStyle: { color: '#e4b468' },
              label: {},
              nodeClick: false
            },
            {
              name: '人造板',
              value: 0.26,
              itemStyle: { color: '#e4b468' },
              label: {},
              nodeClick: false
            }
          ]
        },
        {
          name: '7d',
          itemStyle: { color: '#a189e7' },
          children: [
            {
              name: '溶剂型木器涂料（含腻子）',
              value: 0.21,
              itemStyle: { color: '#a189e7' },
              label: {},
              nodeClick: false
            },
            {
              name: '人造板',
              value: 0.54,
              itemStyle: { color: '#a189e7' },
              label: {},
              nodeClick: false
            },
            {
              name: '人造板',
              value: 0.12,
              itemStyle: { color: '#a189e7' },
              label: {},
              nodeClick: false
            }
          ]
        },
        {
          name: '10d',
          itemStyle: { color: '#5989cb' },
          children: [
            {
              name: '溶剂型木器涂料（含腻子）',
              value: 0.21,
              itemStyle: { color: '#5989cb' },
              label: {},
              nodeClick: false
            },
            {
              name: '人造板',
              value: 0.56,
              itemStyle: { color: '#5989cb' },
              label: {},
              nodeClick: false
            },
            {
              name: '人造板',
              value: 0.08,
              itemStyle: { color: '#5989cb' },
              label: {},
              nodeClick: false
            }
          ]
        },
        {
          name: '14d',
          itemStyle: { color: '#46b4c3' },
          children: [
            {
              name: '溶剂型木器涂料（含腻子）',
              value: 0.21,
              itemStyle: { color: '#46b4c3' },
              label: {},
              nodeClick: false
            },
            {
              name: '人造板',
              value: 0.54,
              itemStyle: { color: '#46b4c3' },
              label: {},
              nodeClick: false
            },
            {
              name: '人造板',
              value: 0.12,
              itemStyle: { color: '#46b4c3' },
              label: {},
              nodeClick: false
            }
          ]
        },
        {
          name: '21d',
          itemStyle: { color: '#6fb38a' },
          children: [
            {
              name: '溶剂型木器涂料（含腻子）',
              value: null,
              itemStyle: { color: '#6fb38a' },
              label: {},
              nodeClick: false
            },
            {
              name: '人造板',
              value: 0.72,
              itemStyle: { color: '#6fb38a' },
              label: {},
              nodeClick: false
            },
            {
              name: '人造板',
              value: 0.09,
              itemStyle: { color: '#6fb38a' },
              label: {},
              nodeClick: false
            }
          ]
        },
        {
          name: '28d',
          itemStyle: { color: '#b7ca6e' },
          children: [
            {
              name: '溶剂型木器涂料（含腻子）',
              value: 0.21,
              itemStyle: { color: '#b7ca6e' },
              label: {},
              nodeClick: false
            },
            {
              name: '人造板',
              value: 0.57,
              itemStyle: { color: '#b7ca6e' },
              label: {},
              nodeClick: false
            },
            {
              name: '人造板',
              value: 0.07,
              itemStyle: { color: '#b7ca6e' },
              label: {},
              nodeClick: false
            }
          ]
        }
      ],
      radius: [0, '50%'],
      emphasis: { focus: 'ancestor' },
      levels: [
        {
          itemStyle:
            {
              color: '#fff'
            }
        },    //由内而外第一级别样式
        {
          r0: '15%',
          r: '35%',
          itemStyle: {
            borderWidth: 1.5
          },
          label: {
            align: 'center',
            fontSize: 14,
            rotate: '0',
            silent: true,
            color:"#fff"
          }
        },
        {                         //由内而外第二级别样式
          r0: '35%',
          r: '50%',
          label: {
            fontSize: 12,
            color: '#333',
            position: 'outside',   //标签显示外围
            distance: 80,    //标签和图距离
            rotate: 0     //标签旋转角度
          },

          labelLine: {
            show: true     //引导线
          },

          itemStyle: {
            borderWidth: 1.5
          }    //扇形边框
        }
      ]
    }
  };

  constructor(private fb: UntypedFormBuilder, private http: _HttpClient) {}

  ngOnInit(): void {

  }



}
