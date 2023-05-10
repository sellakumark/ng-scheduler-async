import { Component, OnInit, ViewChild, ViewContainerRef, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { HttpClient } from '@angular/common/http';
import { Customer, UpdateData } from './customer';
import { CrudService } from './crud.service';
import { ScheduleComponent, DayService, WeekService, WorkWeekService, MonthService, AgendaService, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { DataStateChangeEventArgs, ActionEventArgs, DataSourceChangedEventArgs } from '@syncfusion/ej2-schedule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public data: Observable<DataStateChangeEventArgs>;
  @ViewChild('scheduleObj') public scheduleObj?: ScheduleComponent;
  public state!: DataStateChangeEventArgs;
  customers: Customer[] = [];
  public appointments: Customer[] = [];

  constructor(private crudService: CrudService) {
    this.data = crudService;
  }
  public selectedDate: Date = new Date(2018, 1, 15);
  public ngOnInit(): void {
    let state: any = { skip: 0, take: 12 };
    //this.crudService.execute(state);
    this.getAppointments();
  }
  public eventSettings: EventSettingsModel = {
    fields: {
      id: 'id'
    },
    dataSource: []
  };
  onCreated(args: any): void {
    debugger;
    let schObj = (document.querySelector('.e-schedule') as any).ej2_instances[0];
    schObj.eventSettings.dataSource = this.data;
  }
  onDataBinding(e: Record<string, any>): void {
  }
  getAppointments(): void {
    this.crudService.getAllData({ skip: 0, take: 12 }).subscribe(appointments => {
      this.data = appointments as any;
      this.appointments = (appointments as Record<string, any>)['result'];
    });
  }

  public onDataStateChange(state: DataStateChangeEventArgs): void {
    //this.crudService.execute(state);
    this.crudService.getAllData(state).subscribe(appointments => {
      this.data = appointments as any;
      this.appointments = (appointments as Record<string, any>)['result'];
      let schObj = (document.querySelector('.e-schedule') as any).ej2_instances[0];
      schObj.eventSettings.dataSource = this.data;
    });
  }

  public onDataSourceChanged(state: DataSourceChangedEventArgs): void {
    debugger;
    if (state.requestType === 'eventCreated') {
      this.crudService.addRecord(state).subscribe(appointments => {
        (state as any).addEvent(appointments);
        //this.appointments = (appointments as Record<string, any>)['result'];
      });
    } else if (state.requestType === 'eventChanged') {
      this.crudService.updateRecord(state).subscribe(appointments => {
          (state as any).saveEvent(appointments)
      }
      );
  } else if (state.requestType === 'eventRemoved') {
      this.crudService.deleteRecord(state).subscribe(appointments => {
          (state as any).deleteEvent(appointments)
      });
  }

  }

  public onActionComplete(args: ActionEventArgs) {
    args.cancel = ['eventCreated', 'eventChanged', 'eventRemoved'].indexOf(args.requestType) > -1 ? true : false;

    if (args.cancel) {
      this.updateAppointments(args);
    }
  }

  private updateAppointments(args: ActionEventArgs): void {
    let data: UpdateData = { created: [], updated: [], deleted: [] };

    if (args.addedRecords?.length) {
      for (let i = 0; i < args.addedRecords?.length; i++) {
        data.created.push(args.addedRecords[i] as Customer);
      }
    }
    if (args.changedRecords?.length) {
      for (let i = 0; i < args.changedRecords?.length; i++) {
        data.updated.push(args.changedRecords[i] as Customer);
      }
    }

    if (args.deletedRecords?.length) {
      for (let i = 0; i < args.deletedRecords?.length; i++) {
        data.deleted.push(args.deletedRecords[i] as Customer);
      }
    }

    this.crudService.updateData(data)
      .subscribe(() => {
        this.getAppointments();        
      });
  }
}
