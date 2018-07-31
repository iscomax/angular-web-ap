import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { DepartmentsDetailComponent } from './departments-detail/departments-detail.component';
import { DepartmentsComponent } from './departments/departments.component';

const  routes: Routes = [
  {path: '', redirectTo: '/departaments',  pathMatch: 'full'},
  {path: 'departaments', component: DepartmentsComponent },
  {path: 'departaments/id', component: DepartmentsDetailComponent}
  


 
] ;  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
export class AppRoutingngModule { }
