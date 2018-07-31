import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentsDetailComponent } from './departments-detail/departments-detail.component';
import { AppRoutingngModule } from './/app-routingng.module';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    DepartmentsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingngModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
