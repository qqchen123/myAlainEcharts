import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { MychartsRoutingModule } from './mycharts-routing.module';
import { MychartsService } from './mycharts.service';
import { MychartsLogComponent } from './log/log.component';
import { MychartsLogService } from './log/log.service';
import {ChartEChartsModule} from "@delon/chart/chart-echarts";

const COMPONENTS: Type<void>[] = [
  MychartsLogComponent];

@NgModule({
    imports: [
        SharedModule,
        MychartsRoutingModule,
        ChartEChartsModule
    ],
  declarations: COMPONENTS,
  providers: [
    MychartsService,
    MychartsLogService
  ],
})
export class MychartsModule { }
