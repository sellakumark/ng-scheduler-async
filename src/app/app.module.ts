import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-mem';
import { CrudService } from './crud.service';
import { ScheduleAllModule } from '@syncfusion/ej2-angular-schedule';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleAllModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
      )
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
