import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      { EndTime: new Date(2018, 1, 15, 12, 30), IsAllDay: false, StartTime: new Date(2018, 1, 15, 10, 0), Subject: 'Paris', id: 1
    }
    ];
    return {customers};
  }
}
