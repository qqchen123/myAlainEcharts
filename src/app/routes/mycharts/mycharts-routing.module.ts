import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MychartsLogComponent } from './log/log.component';
import { MychartsListComponent } from './list/list.component';
import { MychartsTlistComponent } from './tlist/tlist.component';
import { MychartsLoginComponent } from './login/login.component';
import { MychartsFormaComponent } from './forma/forma.component';
import { MychartsFormbComponent } from './formb/formb.component';

const routes: Routes = [

  { path: 'log', component: MychartsLogComponent },
  { path: 'list', component: MychartsListComponent },
  { path: 'tlist', component: MychartsTlistComponent },
  { path: 'login', component: MychartsLoginComponent },
  { path: 'forma', component: MychartsFormaComponent },
  { path: 'formb', component: MychartsFormbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MychartsRoutingModule { }
