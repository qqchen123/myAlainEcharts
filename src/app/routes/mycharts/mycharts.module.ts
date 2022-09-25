import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { MychartsRoutingModule } from './mycharts-routing.module';
import { MychartsService } from './mycharts.service';
import { MychartsLogComponent } from './log/log.component';
import { MychartsLogService } from './log/log.service';
import {ChartEChartsModule} from "@delon/chart/chart-echarts";
import { MychartsListComponent } from './list/list.component';
import {NzCascaderModule} from "ng-zorro-antd/cascader";
import { MychartsTlistComponent } from './tlist/tlist.component';
import { MychartsLoginComponent } from './login/login.component';
import { MychartsFormaComponent } from './forma/forma.component';
import { MychartsFormbComponent } from './formb/formb.component';

const COMPONENTS: Type<void>[] = [
  MychartsLogComponent,
  MychartsListComponent,
  MychartsTlistComponent,
  MychartsLoginComponent,
  MychartsFormaComponent,
  MychartsFormbComponent];

@NgModule({
    imports: [
        SharedModule,
        MychartsRoutingModule,
        ChartEChartsModule,
        NzCascaderModule
    ],
  declarations: COMPONENTS,
  providers: [
    MychartsService,
    MychartsLogService
  ],
})
export class MychartsModule { }
