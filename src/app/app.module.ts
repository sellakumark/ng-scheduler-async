import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CrudService } from './crud.service';
import { ScheduleAllModule } from '@syncfusion/ej2-angular-schedule';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleAllModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    InMemoryWebApiModule.forRoot(DataService, { delay: 5000 })
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
