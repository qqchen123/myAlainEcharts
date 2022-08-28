import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MychartsLogComponent } from './log/log.component';

const routes: Routes = [

  { path: 'log', component: MychartsLogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MychartsRoutingModule { }
