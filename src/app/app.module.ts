import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentsDetailComponent } from './departments-detail/departments-detail.component';
import { AppRoutingngModule } from './/app-routingng.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { DepartmentsService } from './departments.service';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    DepartmentsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingngModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [DepartmentsService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
