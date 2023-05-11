import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, ScheduleComponent, ActionEventArgs, EventSettingsModel, ReturnType } from '@syncfusion/ej2-angular-schedule';
import { forkJoin, Observable } from 'rxjs';
import { CrudService, EventData } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('scheduleObj') scheduleObj: ScheduleComponent;

  public selectedDate: Date = new Date(2023, 4, 1);
  public eventSettings: EventSettingsModel = {
    fields: {
      id: 'id'
    }
  };
  private $query = { skip: 0, take: 100 };
  private isNavigation: boolean = false;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.eventData.subscribe((response: Array<EventData>) => {
      if (this.scheduleObj) {
        this.scheduleObj.eventSettings.dataSource = response;
        this.scheduleObj.hideSpinner();
      }
    });
  }

  onDataBinding(args: ReturnType): void {
    if (!(this.scheduleObj?.eventSettings.dataSource as Array<Record<string, any>>).length || this.isNavigation) {
      args.result = [];
      this.scheduleObj.showSpinner();
      this.crudService.execute(this.$query);
      this.isNavigation = false;
    }
  }

  onNavigation(): void {
    this.isNavigation = true;
  }

  onActionBegin(args: ActionEventArgs): void {
    if (['eventCreate', 'eventChange', 'eventRemove'].indexOf(args.requestType) > -1) {
      args.cancel = true;
      const requests: Array<Observable<EventData>> = [];
      if (args.addedRecords.length) {
        args.addedRecords.forEach((data: any) => {
          requests.push(this.crudService.addEvent(data));
        });
      }
      if (args.changedRecords.length) {
        args.changedRecords.forEach((data: any) => {
          requests.push(this.crudService.updateEvent(data));
        });
      }
      if (args.deletedRecords.length) {
        args.deletedRecords.forEach((data: any) => {
          requests.push(this.crudService.deleteEvent(data));
        });
      }
      this.scheduleObj.showSpinner();
      forkJoin(requests).subscribe({
        next: () => {
          this.crudService.execute(this.$query);
        },
        error: (error) => {
          this.scheduleObj.hideSpinner();
          console.error(error);
        }
      });
    }
  }
}
