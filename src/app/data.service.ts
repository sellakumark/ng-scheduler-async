import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EventData } from './crud.service';

export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const crudevents: Array<EventData> = [
      {
        id: 1,
        Subject: 'May Day',
        StartTime: new Date(2023, 4, 1, 10),
        EndTime: new Date(2023, 4, 1, 12, 30),
        IsAllDay: false
      },
      {
        id: 2,
        Subject: 'Bering Sea Gold',
        StartTime: new Date(2023, 4, 2, 10),
        EndTime: new Date(2023, 4, 2, 12, 30),
        IsAllDay: false
      },
      {
        id: 3,
        Subject: 'Annual Conference',
        StartTime: new Date(2023, 4, 3, 10),
        EndTime: new Date(2023, 4, 3, 12, 30),
        IsAllDay: false
      },
      {
        id: 4,
        Subject: 'Final Presentation',
        StartTime: new Date(2023, 4, 4, 10),
        EndTime: new Date(2023, 4, 4, 12, 30),
        IsAllDay: false
      },
      {
        id: 5,
        Subject: 'Sports Day',
        StartTime: new Date(2023, 4, 5, 10),
        EndTime: new Date(2023, 4, 5, 12, 30),
        IsAllDay: false
      }
    ];
    return { crudevents };
  }

}

