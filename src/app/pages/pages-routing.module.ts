import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ViewallstudentsComponent } from './viewallstudents/viewallstudents.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewonestudentComponent } from './viewonestudent/viewonestudent.component';

const routes: Routes = [
  
  { path: '', component: PagesComponent ,

  children:[
    {path:'all',component:ViewallstudentsComponent},
    {path:'add',component:AddstudentComponent},
    {path:'one',component:ViewonestudentComponent}
  ]

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
