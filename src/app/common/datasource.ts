import { DataManager, Query } from '@syncfusion/ej2-data';
import { extend } from '@syncfusion/ej2-base';

/**
 * Schedule datasource spec
 */

export const defaultData: Object[] = [
  {
    Id: 1,
    Subject: 'Paris',
    StartTime: new Date(2017, 9, 29, 10, 0),
    EndTime: new Date(2017, 9, 29, 11, 30),
    IsAllDay: false
  }, {
    Id: 2,
    Subject: 'Meeting - 1',
    StartTime: new Date(2017, 9, 30, 10, 0),
    EndTime: new Date(2017, 9, 30, 12, 30),
    IsAllDay: false
  }, {
    Id: 3,
    Subject: 'Meeting - 2',
    StartTime: new Date(2017, 9, 30, 11, 0),
    EndTime: new Date(2017, 9, 30, 14, 30),
    IsAllDay: false
  }, {
    Id: 4,
    StartTime: new Date(2017, 9, 31),
    EndTime: new Date(2017, 10, 1),
    IsAllDay: true
  }, {
    Id: 5,
    Subject: 'Conference - 2',
    StartTime: new Date(2017, 9, 31, 22, 0),
    EndTime: new Date(2017, 10, 1, 0, 0),
    IsAllDay: false
  }, {
    Id: 6,
    Subject: 'Conference - 3',
    StartTime: new Date(2017, 10, 1, 9, 30),
    EndTime: new Date(2017, 10, 1, 11, 45),
    IsAllDay: false
  }, {
    Id: 7,
    Subject: 'Conference - 4',
    StartTime: new Date(2017, 10, 1, 10, 30),
    EndTime: new Date(2017, 10, 1, 12, 45),
    IsAllDay: false
  }, {
    Id: 8,
    Subject: 'Travelling',
    StartTime: new Date(2017, 10, 1, 11, 30),
    EndTime: new Date(2017, 10, 1, 13, 45),
    IsAllDay: false
  }, {
    Id: 9,
    Subject: 'Vacation',
    StartTime: new Date(2017, 10, 2, 10, 0),
    EndTime: new Date(2017, 10, 2, 12, 30),
    IsAllDay: false
  }, {
    Id: 10,
    Subject: 'Conference',
    StartTime: new Date(2017, 10, 2, 15, 30),
    EndTime: new Date(2017, 10, 2, 18, 45),
    IsAllDay: false
  }, {
    Id: 11,
    Subject: 'Vacation',
    StartTime: new Date(2017, 10, 3, 10, 15),
    EndTime: new Date(2017, 10, 3, 14, 45),
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
    IsAllDay: false
  }, {
    Id: 12,
    Subject: 'Conference',
    StartTime: new Date(2017, 10, 4, 9, 30),
    EndTime: new Date(2017, 10, 5, 5, 45),
    IsAllDay: false
  }, {
    Id: 13,
    StartTime: new Date(2017, 10, 5, 10, 0),
    EndTime: new Date(2017, 10, 5, 11, 30),
    IsAllDay: false
  }, {
    Id: 14,
    Subject: 'Same Time',
    StartTime: new Date(2017, 10, 5, 10, 0),
    EndTime: new Date(2017, 10, 5, 11, 30),
    IsAllDay: false
  }, {
    Id: 15,
    Subject: 'Same Time',
    StartTime: new Date(2017, 10, 5, 10, 0),
    EndTime: new Date(2017, 10, 5, 11, 30),
    IsAllDay: false
  }, {
    Id: 16,
    Subject: 'Same Time',
    StartTime: new Date(2017, 10, 5, 10, 0),
    EndTime: new Date(2017, 10, 5, 11, 30),
    IsAllDay: false
  }, {
    Id: 17,
    Subject: 'Same Time',
    StartTime: new Date(2017, 10, 5, 10, 0),
    EndTime: new Date(2017, 10, 5, 11, 30),
    IsAllDay: false
  }, {
    Id: 18,
    Subject: 'Same Time',
    StartTime: new Date(2017, 10, 5, 10, 0),
    EndTime: new Date(2017, 10, 5, 11, 30),
    IsAllDay: false
  }, {
    Id: 19,
    Subject: 'Meeting - 1',
    StartTime: new Date(2017, 10, 6),
    EndTime: new Date(2017, 10, 7),
    IsAllDay: true
  }, {
    Id: 20,
    Subject: 'Meeting - 2',
    StartTime: new Date(2017, 10, 6, 11, 0),
    EndTime: new Date(2017, 10, 6, 14, 30),
    IsAllDay: false
  }, {
    Id: 21,
    Subject: 'Conference - 1',
    StartTime: new Date(2017, 10, 7, 22, 0),
    EndTime: new Date(2017, 10, 8, 20, 0),
    IsAllDay: true
  }, {
    Id: 22,
    Subject: 'Conference - 2',
    StartTime: new Date(2017, 10, 7, 22, 0),
    EndTime: new Date(2017, 10, 14, 23, 0),
    IsAllDay: false
  }, {
    Id: 23,
    Subject: 'Conference - 3',
    StartTime: new Date(2017, 10, 8, 9, 30),
    EndTime: new Date(2017, 10, 9, 11, 45),
    IsAllDay: true
  }, {
    Id: 24,
    Subject: 'Conference - 3 - A',
    StartTime: new Date(2017, 10, 8, 9, 30),
    EndTime: new Date(2017, 10, 8, 10, 0),
    IsAllDay: true
  }, {
    Id: 25,
    Subject: 'Conference - 3 - B',
    StartTime: new Date(2017, 10, 8, 10, 0),
    EndTime: new Date(2017, 10, 8, 10, 30),
    IsAllDay: false
  }, {
    Id: 26,
    Subject: 'Conference - 4',
    StartTime: new Date(2017, 10, 8, 10, 30),
    EndTime: new Date(2017, 10, 8, 12, 45),
    IsAllDay: false
  }, {
    Id: 27,
    Subject: 'Travelling',
    StartTime: new Date(2017, 10, 8, 11, 30),
    EndTime: new Date(2017, 10, 8, 13, 45),
    IsAllDay: false
  }, {
    Id: 28,
    Subject: 'Vacation',
    StartTime: new Date(2017, 10, 9, 10, 0),
    EndTime: new Date(2017, 10, 9, 12, 30),
    IsAllDay: false
  }, {
    Id: 29,
    Subject: 'Conference',
    StartTime: new Date(2017, 10, 9, 15, 30),
    EndTime: new Date(2017, 10, 9, 18, 45),
    IsAllDay: false
  }, {
    Id: 30,
    Subject: 'Vacation',
    StartTime: new Date(2017, 10, 10, 10, 15),
    EndTime: new Date(2017, 10, 10, 14, 45),
    IsAllDay: false
  }, {
    Id: 31,
    Subject: 'Conference',
    StartTime: new Date(2017, 10, 11, 9, 30),
    EndTime: new Date(2017, 10, 11, 10, 45),
    IsAllDay: false
  }, {
    Id: 32,
    Subject: 'Paris',
    StartTime: new Date(2017, 10, 12, 10, 0),
    EndTime: new Date(2017, 10, 12, 11, 30),
    IsAllDay: true
  }, {
    Id: 33,
    Subject: 'Meeting - 1',
    StartTime: new Date(2017, 10, 13, 10, 0),
    EndTime: new Date(2017, 10, 13, 12, 30),
    IsAllDay: false
  }, {
    Id: 34,
    Subject: 'Meeting - 2',
    StartTime: new Date(2017, 10, 13, 11, 0),
    EndTime: new Date(2017, 10, 13, 14, 30),
    IsAllDay: false
  }, {
    Id: 35,
    Subject: 'Conference - 1',
    StartTime: new Date(2017, 10, 14, 22, 0),
    EndTime: new Date(2017, 10, 15, 2, 30),
    IsAllDay: false
  }, {
    Id: 36,
    Subject: 'Conference - 2',
    StartTime: new Date(2017, 10, 14, 22, 0),
    EndTime: new Date(2017, 10, 15, 0, 0),
    IsAllDay: false
  }, {
    Id: 37,
    Subject: 'Conference - 3',
    StartTime: new Date(2017, 10, 15, 9, 30),
    EndTime: new Date(2017, 10, 15, 11, 45),
    IsAllDay: false
  }, {
    Id: 38,
    Subject: 'Conference - 4',
    StartTime: new Date(2017, 10, 15, 10, 30),
    EndTime: new Date(2017, 10, 15, 12, 45),
    IsAllDay: false
  }, {
    Id: 39,
    Subject: 'Travelling',
    StartTime: new Date(2017, 10, 15, 11, 30),
    EndTime: new Date(2017, 10, 15, 13, 45),
    IsAllDay: false
  }, {
    Id: 40,
    Subject: 'Vacation',
    StartTime: new Date(2017, 10, 16, 10, 0),
    EndTime: new Date(2017, 10, 16, 12, 30),
    IsAllDay: false
  }, {
    Id: 41,
    Subject: 'Conference',
    StartTime: new Date(2017, 10, 16, 15, 30),
    EndTime: new Date(2017, 10, 16, 18, 45),
    IsAllDay: false
  }, {
    Id: 42,
    Subject: 'Vacation',
    StartTime: new Date(2017, 10, 17, 10, 15),
    EndTime: new Date(2017, 10, 17, 14, 45),
    IsAllDay: false
  }, {
    Id: 43,
    Subject: 'Conference',
    StartTime: new Date(2017, 10, 18, 9, 30),
    EndTime: new Date(2017, 10, 18, 10, 45),
    IsAllDay: false
  }
];

export const dragResizeData: Object[] = [
  {
    Id: 1,
    Subject: 'Paris Conference',
    StartTime: new Date(2018, 6, 1, 10, 0),
    EndTime: new Date(2018, 6, 1, 11, 30),
    IsAllDay: false,
    RoomId: 1,
    OwnerId: 1
  }, {
    Id: 2,
    Subject: 'Daily Meeting',
    StartTime: new Date(2018, 6, 2, 11, 15),
    EndTime: new Date(2018, 6, 2, 12, 30),
    AllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
    RoomId: 1,
    OwnerId: 3
  }, {
    Id: 3,
    Subject: 'General Meeting',
    StartTime: new Date(2018, 6, 3, 11, 0),
    EndTime: new Date(2018, 6, 3, 12, 45),
    IsAllDay: false,
    RoomId: 2,
    OwnerId: 2
  }, {
    Id: 4,
    Subject: 'Board Meeting',
    StartTime: new Date(2018, 6, 4, 9, 0),
    EndTime: new Date(2018, 6, 4, 11, 0),
    IsAllDay: false,
    RoomId: 1,
    OwnerId: 1
  }, {
    Id: 5,
    Subject: 'Holiday',
    StartTime: new Date(2018, 6, 5, 10, 30),
    EndTime: new Date(2018, 6, 5, 11, 30),
    IsAllDay: false,
    RoomId: 1,
    OwnerId: 3
  }, {
    Id: 6,
    Subject: 'Vacation',
    StartTime: new Date(2018, 6, 6, 12, 15),
    EndTime: new Date(2018, 6, 6, 13, 30),
    IsAllDay: false,
    RoomId: 2,
    OwnerId: 2
  }, {
    Id: 7,
    Subject: 'Entertainment',
    StartTime: new Date(2018, 6, 7, 11, 0),
    EndTime: new Date(2018, 6, 7, 12, 30),
    IsAllDay: false,
    RoomId: 1,
    OwnerId: 1
  }, {
    Id: 8,
    Subject: 'Event 1',
    StartTime: new Date(2018, 6, 2),
    EndTime: new Date(2018, 6, 3),
    IsAllDay: true,
    RoomId: 1,
    OwnerId: 1
  }, {
    Id: 9,
    Subject: 'Event 2',
    StartTime: new Date(2018, 6, 4),
    EndTime: new Date(2018, 6, 6),
    IsAllDay: true,
    RoomId: 1,
    OwnerId: 3
  }, {
    Id: 10,
    Subject: 'Event 3',
    StartTime: new Date(2018, 6, 6, 10),
    EndTime: new Date(2018, 6, 8, 11),
    IsAllDay: false,
    RoomId: 2,
    OwnerId: 2
  }
];

export const recurrenceData: Object[] = [
  {
    Id: 1,
    Subject: 'Project demo meeting with Andrew',
    Location: 'Office',
    StartTime: new Date(2018, 1, 14, 12, 0),
    EndTime: new Date(2018, 1, 14, 13, 0),
    RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;COUNT=10',
    CategoryColor: '#1aaa55'
  }, {
    Id: 2,
    Subject: 'Scrum Meeting',
    Location: 'Office',
    StartTime: new Date(2018, 1, 12, 9, 30),
    EndTime: new Date(2018, 1, 12, 10, 30),
    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1',
    CategoryColor: '#357cd2'
  }, {
    Id: 3,
    Subject: 'Meeting with Core team',
    Location: 'Office',
    StartTime: new Date(2018, 1, 16, 12, 0),
    EndTime: new Date(2018, 1, 16, 14, 0),
    RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;BYDAY=FR',
    CategoryColor: '#7fa900'
  }, {
    Id: 4,
    Subject: 'Customer meeting – John Mackenzie',
    Location: 'Office',
    StartTime: new Date(2018, 1, 20, 11, 30),
    EndTime: new Date(2018, 1, 20, 13, 30),
    RecurrenceRule: 'FREQ=MONTHLY;BYMONTHDAY=20;INTERVAL=1;COUNT=5',
    CategoryColor: '#ea7a57'
  }, {
    Id: 5,
    Subject: 'Team Fun Activities',
    Location: 'Office',
    StartTime: new Date(2018, 1, 22),
    EndTime: new Date(2018, 1, 23),
    IsAllDay: true,
    RecurrenceRule: 'FREQ=YEARLY;BYDAY=TH;BYMONTH=2;BYSETPOS=4;INTERVAL=1;COUNT=10',
    CategoryColor: '#00bdae'
  }
];

export const stringData: Object[] = [
  {
    Id: '1',
    Subject: 'Event1',
    StartTime: new Date(2017, 9, 31, 10, 0),
    EndTime: new Date(2017, 9, 31, 11, 0)
  },
  {
    Id: '2',
    Subject: 'Event2',
    StartTime: new Date(2017, 9, 29, 10, 0),
    EndTime: new Date(2017, 9, 29, 11, 0)
  },
  {
    Id: '3',
    Subject: 'Event3',
    StartTime: new Date(2017, 9, 30, 10, 0),
    EndTime: new Date(2017, 9, 30, 11, 0)
  },
  {
    Id: 'recEvent',
    Subject: 'Event4',
    StartTime: new Date(2017, 9, 30, 12, 0),
    EndTime: new Date(2017, 9, 30, 13, 0),
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5'
  }
];

export const sampleData: Object[] = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    StartTime: new Date(2018, 1, 16, 9, 30),
    EndTime: new Date(2018, 1, 16, 11, 0),
    CategoryColor: '#1aaa55'
  }, {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    StartTime: new Date(2018, 1, 12, 12, 0),
    EndTime: new Date(2018, 1, 12, 14, 0),
    CategoryColor: '#357cd2'
  }, {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    StartTime: new Date(2018, 1, 13, 9, 30),
    EndTime: new Date(2018, 1, 13, 11, 0),
    CategoryColor: '#7fa900'
  }, {
    Id: 4,
    Subject: 'Meteor Showers in 2018',
    StartTime: new Date(2018, 1, 14, 13, 0),
    EndTime: new Date(2018, 1, 14, 14, 30),
    CategoryColor: '#ea7a57'
  }, {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    StartTime: new Date(2018, 1, 15, 12, 0),
    EndTime: new Date(2018, 1, 15, 14, 0),
    CategoryColor: '#00bdae'
  }, {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    StartTime: new Date(2018, 1, 15, 9, 30),
    EndTime: new Date(2018, 1, 15, 11, 0),
    CategoryColor: '#f57f17'
  }];

export const tooltipData: Object[] = [
  {
    Id: 1,
    StartTime: new Date(2017, 11, 31, 10, 0),
    EndTime: new Date(2018, 0, 1, 11, 30),
    IsAllDay: false,
    Description: 'Tooltip Testing',
    Location: 'Chennai'
  }, {
    Id: 2,
    Subject: 'AllDay Event',
    StartTime: new Date(2018, 0, 1),
    EndTime: new Date(2018, 0, 2),
    IsAllDay: true,
    Description: 'Tooltip Testing',
    Location: 'Chennai'
  }, {
    Id: 3,
    Subject: 'Normal Event',
    StartTime: new Date(2018, 0, 3, 10, 0),
    EndTime: new Date(2018, 0, 3, 11, 0),
    IsAllDay: false,
    Description: 'Tooltip Testing'
  }, {
    Id: 4,
    Subject: 'AllDay Spanned Event',
    StartTime: new Date(2018, 0, 6, 10, 0),
    EndTime: new Date(2018, 0, 8, 10, 30),
    IsAllDay: false,
    Description: 'Tooltip Testing',
    Location: 'Chennai'
  }, {
    Id: 5,
    Subject: 'Normal Spanned Event',
    StartTime: new Date(2018, 0, 4, 10, 0),
    EndTime: new Date(2018, 0, 5, 9, 30),
    IsAllDay: false,
    Description: 'Tooltip Testing',
    Location: 'Chennai'
  }
];

export const timezoneData: Object[] = [
  {
    Id: 1,
    Subject: 'Paris',
    StartTime: new Date(2017, 9, 16, 10, 0),
    EndTime: new Date(2017, 9, 16, 11, 30),
    IsAllDay: true,
    Location: 'India',
    Description: 'Summer vacation planned for outstation.',
    StartTimezone: 'America/New_York',
    EndTimezone: 'America/New_York'
  }, {
    Id: 2,
    Subject: 'Meeting - 1',
    StartTime: new Date(2017, 9, 17, 10, 0),
    EndTime: new Date(2017, 9, 19, 12, 30),
    IsAllDay: false,
    StartTimezone: 'America/New_York'
  }, {
    Id: 3,
    Subject: 'Meeting - 2',
    StartTime: new Date(2017, 9, 19, 14, 0),
    EndTime: new Date(2017, 9, 19, 16, 30),
    IsAllDay: false,
    EndTimezone: 'America/New_York'
  }, {
    Id: 4,
    Subject: 'Conference - 1',
    StartTime: new Date(2017, 9, 20, 9, 30),
    EndTime: new Date(2017, 9, 20, 10, 45),
    IsAllDay: false
  }
];

export const testData: Object[] = [
  {
    Id: 1,
    Subject: 'Normal Event',
    StartTime: new Date(2017, 10, 2, 10),
    EndTime: new Date(2017, 10, 2, 12),
  }, {
    Id: 2,
    Subject: 'Spanned - Less than 24 hour',
    StartTime: new Date(2017, 10, 1, 12, 30),
    EndTime: new Date(2017, 10, 2, 1, 30),
  }, {
    Id: 3,
    Subject: 'Spanned - Greater than 24 hour',
    StartTime: new Date(2017, 10, 1, 2),
    EndTime: new Date(2017, 10, 8, 4),
  }, {
    Id: 4,
    Subject: 'Allday event',
    StartTime: new Date(2017, 10, 3),
    EndTime: new Date(2017, 10, 4),
    IsAllDay: true
  }, {
    Id: 5,
    Subject: 'Allday Spanned event',
    StartTime: new Date(2017, 10, 3),
    EndTime: new Date(2017, 10, 10),
    IsAllDay: true
  }, {
    Id: 6,
    Subject: 'Allday across the month',
    StartTime: new Date(2017, 10, 16),
    EndTime: new Date(2018, 0, 1),
    IsAllDay: true
  }, {
    Id: 7,
    Subject: 'Recurrence every 2 days',
    StartTime: new Date(2017, 10, 13, 11),
    EndTime: new Date(2017, 10, 13, 12),
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=2;COUNT=1'
  }
];
export const employeeEventData: Object[] = [
  {
    Id: 1,
    Subject: 'Project Workflow Analysis',
    StartTime: new Date(2018, 1, 12, 9, 0),
    EndTime: new Date(2018, 1, 12, 11, 0)

  }, {
    Id: 2,
    Subject: 'Project Requirement Planning',
    StartTime: new Date(2018, 1, 13, 11, 30),
    EndTime: new Date(2018, 1, 13, 14, 0)
  }, {
    Id: 3,
    Subject: 'Quality Analysis',
    StartTime: new Date(2018, 1, 14, 9, 30),
    EndTime: new Date(2018, 1, 14, 11, 0),
    CategoryColor: '#7fa900'
  }, {
    Id: 4,
    Subject: 'Timeline Estimation',
    StartTime: new Date(2018, 1, 14, 11, 30),
    EndTime: new Date(2018, 1, 14, 14, 0),
    CategoryColor: '#ea7a57'
  }, {
    Id: 5,
    Subject: 'Project Resource planning',
    StartTime: new Date(2018, 1, 15, 9, 30),
    EndTime: new Date(2018, 1, 15, 12, 0),
    CategoryColor: '#00bdae'
  }, {
    Id: 6,
    Subject: 'Meeting with Developers',
    StartTime: new Date(2018, 1, 16, 11, 0),
    EndTime: new Date(2018, 1, 16, 13, 0),
    CategoryColor: '#f57f17'
  }, {
    Id: 7,
    Subject: 'Task Assignment to Developers',
    StartTime: new Date(2018, 1, 19, 10, 0),
    EndTime: new Date(2018, 1, 19, 11, 30),
    CategoryColor: '#1aaa55'
  }, {
    Id: 8,
    Subject: 'Project Review - 1',
    StartTime: new Date(2018, 1, 20, 11, 0),
    EndTime: new Date(2018, 1, 20, 12, 30),
    CategoryColor: '#357cd2'
  }, {
    Id: 9,
    Subject: 'Project Review - 2',
    StartTime: new Date(2018, 1, 21, 12, 0),
    EndTime: new Date(2018, 1, 21, 13, 30),
    CategoryColor: '#7fa900'
  }, {
    Id: 10,
    Subject: 'Project Review - 3',
    StartTime: new Date(2018, 1, 22, 11, 0),
    EndTime: new Date(2018, 1, 22, 12, 30),
    CategoryColor: '#ea7a57'
  }, {
    Id: 11,
    Subject: 'Project Output Preview',
    StartTime: new Date(2018, 1, 23, 9, 30),
    EndTime: new Date(2018, 1, 23, 12, 0),
    CategoryColor: '#00bdae'
  }, {
    Id: 12,
    Subject: 'Testing Project Quality',
    StartTime: new Date(2018, 1, 26, 10, 0),
    EndTime: new Date(2018, 1, 26, 11, 30),
    CategoryColor: '#f57f17'
  }, {
    Id: 13,
    Subject: 'Draft Technical Documentation',
    StartTime: new Date(2018, 1, 27, 10, 0),
    EndTime: new Date(2018, 1, 27, 13, 0),
    CategoryColor: '#1aaa55'
  }, {
    Id: 14,
    Subject: 'Online Hosting of Project',
    StartTime: new Date(2018, 1, 28, 10, 0),
    EndTime: new Date(2018, 1, 28, 11, 30),
    CategoryColor: '#357cd2'
  }, {
    Id: 15,
    Subject: 'Project Submission to Client',
    StartTime: new Date(2018, 2, 1, 10, 0),
    EndTime: new Date(2018, 2, 1, 13, 0),
    CategoryColor: '#7fa900'
  }, {
    Id: 16,
    Subject: 'Review meeting with Client',
    StartTime: new Date(2018, 2, 2, 10, 0),
    EndTime: new Date(2018, 2, 2, 11, 30),
    CategoryColor: '#ea7a57'
  }
];
export let headerRowData: Object[] = [
  {
      Id: 1,
      Subject: 'Story Time for Kids',
      StartTime: new Date(2018, 0, 1, 9, 0),
      EndTime: new Date(2018, 0, 3, 11, 0),
      CategoryColor: '#df5286'
  },
  {
      Id: 2,
      Subject: 'Camping with Turtles',
      StartTime: new Date(2018, 0, 2, 15, 0),
      EndTime: new Date(2018, 0, 3, 17, 0),
      CategoryColor: '#7fa900'
  },
  {
      Id: 3,
      Subject: 'Wildlife Warriors',
      StartTime: new Date(2018, 0, 3, 9, 30),
      EndTime: new Date(2018, 0, 4, 11, 0),
      CategoryColor: '#ea7a57'
  },
  {
      Id: 4,
      Subject: 'Parrot Talk',
      StartTime: new Date(2018, 0, 4, 11, 0),
      EndTime: new Date(2018, 0, 6, 13, 0),
      CategoryColor: '#1aaa55'
  },
  {
      Id: 6,
      Subject: 'Croco World',
      StartTime: new Date(2018, 0, 5, 16, 0),
      EndTime: new Date(2018, 0, 8, 17, 30),
      CategoryColor: '#fec200'
  },
  {
      Id: 7,
      Subject: 'Venomous Snake Hunt',
      StartTime: new Date(2018, 0, 6, 15, 0),
      EndTime: new Date(2018, 0, 7, 16, 30),
      CategoryColor: '#5978ee'
  },
  {
      Id: 8,
      Subject: 'Face Painting & Drawing events',
      StartTime: new Date(2018, 0, 7, 8, 0),
      EndTime: new Date(2018, 0, 10, 9, 0),
      IsAllDay: true,
      CategoryColor: '#00bdae'
  },
  {
      Id: 11,
      Subject: 'Jungle Treasure Hunt',
      StartTime: new Date(2018, 0, 11),
      EndTime: new Date(2018, 0, 14),
      IsAllDay: true,
      CategoryColor: '#7FA900'
  },
  {
      Id: 12,
      Subject: 'Endangered Species Program',
      StartTime: new Date(2018, 0, 12, 11, 30),
      EndTime: new Date(2018, 0, 15, 12, 0),
      CategoryColor: '#1aaa55'
  },
  {
      Id: 13,
      Subject: 'Black Cockatoos Playtime',
      StartTime: new Date(2018, 0, 13),
      EndTime: new Date(2018, 0, 17),
      IsAllDay: true,
      CategoryColor: '#ea7a57'
  },
  {
      Id: 14,
      Subject: 'Walk with Jungle King',
      StartTime: new Date(2018, 0, 17, 9, 0),
      EndTime: new Date(2018, 0, 21, 11, 0),
      CategoryColor: '#fec200'
  },
  {
      Id: 15,
      Subject: 'Trained Climbers',
      StartTime: new Date(2018, 0, 20),
      EndTime: new Date(2018, 0, 22),
      CategoryColor: '#1aaa55'
  },
  {
      Id: 16,
      Subject: 'Playtime with Chimpanzees',
      StartTime: new Date(2018, 0, 18, 9, 30),
      EndTime: new Date(2018, 0, 20, 11, 0),
      CategoryColor: '#df5286'
  },
  {
      Id: 17,
      Subject: 'Meet a small Mammal',
      StartTime: new Date(2018, 0, 23, 11, 0),
      EndTime: new Date(2018, 0, 25, 13, 0),
      CategoryColor: '#7fa900'
  },
  {
      Id: 18,
      Subject: 'Amazon Fish Feeding',
      StartTime: new Date(2018, 0, 22),
      EndTime: new Date(2018, 0, 24),
      IsAllDay: true,
      CategoryColor: '#1aaa55'
  },
  {
      Id: 19,
      Subject: 'Elephant Ride',
      StartTime: new Date(2018, 0, 24, 14, 30),
      EndTime: new Date(2018, 0, 27, 16, 0),
      CategoryColor: '#7fa900'
  },
  {
      Id: 20,
      Subject: 'Black Cockatoos Playtime',
      StartTime: new Date(2018, 0, 26),
      EndTime: new Date(2018, 0, 30),
      IsAllDay: true,
      CategoryColor: '#ea7a57'
  },
  {
      Id: 21,
      Subject: 'Endangered Species Program',
      StartTime: new Date(2018, 0, 27, 11, 30),
      EndTime: new Date(2018, 0, 29, 12, 0),
      CategoryColor: '#1aaa55'
  },
  {
      Id: 22,
      Subject: 'Feed the Giants',
      StartTime: new Date(2018, 0, 28, 14, 30),
      EndTime: new Date(2018, 0, 31, 17, 0),
      CategoryColor: '#00bdae'
  },
  {
      Id: 23,
      Subject: 'Birds of Prey',
      StartTime: new Date(2018, 1, 4, 16, 0),
      EndTime: new Date(2018, 1, 7, 17, 30),
      CategoryColor: '#865fcf'
  },
  {
      Id: 24,
      Subject: 'Trained Climbers',
      StartTime: new Date(2018, 0, 31),
      EndTime: new Date(2018, 1, 3),
      CategoryColor: '#1aaa55'
  },
  {
      Id: 25,
      Subject: 'Venomous Snake Hunt',
      StartTime: new Date(2018, 1, 2, 15, 0),
      EndTime: new Date(2018, 1, 5, 16, 30),
      CategoryColor: '#5978ee'
  },
  {
      Id: 26,
      Subject: 'Croco World',
      StartTime: new Date(2018, 1, 6, 16, 0),
      EndTime: new Date(2018, 1, 9, 17, 30),
      CategoryColor: '#7fa900'
  },
  {
      Id: 27,
      Subject: 'Amazon Fish Feeding',
      StartTime: new Date(2018, 1, 8),
      EndTime: new Date(2018, 1, 11),
      IsAllDay: true,
      CategoryColor: '#1aaa55'
  },

  {
      Id: 28,
      Subject: 'Playtime with Chimpanzees',
      StartTime: new Date(2018, 1, 10, 9, 30),
      EndTime: new Date(2018, 1, 13, 11, 0),
      CategoryColor: '#df5286'
  },
  {
      Id: 29,
      Subject: 'Meet a small Mammal',
      StartTime: new Date(2018, 1, 12, 11, 0),
      EndTime: new Date(2018, 1, 15, 13, 0),
      CategoryColor: '#7fa900'
  },
  {
      Id: 30,
      Subject: 'Black Cockatoos Playtime',
      StartTime: new Date(2018, 1, 13),
      EndTime: new Date(2018, 1, 17),
      IsAllDay: true,
      CategoryColor: '#ea7a57'
  }
];
export let resourceData2: Object[] = [
  {
      Id: 1,
      Subject: 'Workflow Analysis',
      StartTime: new Date(2018, 3, 1, 9, 30),
      EndTime: new Date(2018, 3, 1, 12, 0),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 2
  }, {
      Id: 2,
      Subject: 'Requirement planning',
      StartTime: new Date(2018, 3, 1, 12, 30),
      EndTime: new Date(2018, 3, 1, 14, 45),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 1
  }, {
      Id: 3,
      Subject: 'Quality Analysis',
      StartTime: new Date(2018, 3, 2, 10, 0),
      EndTime: new Date(2018, 3, 2, 12, 30),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 1
  }, {
      Id: 4,
      Subject: 'Resource planning',
      StartTime: new Date(2018, 3, 2, 13, 0),
      EndTime: new Date(2018, 3, 2, 15, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 5,
      Subject: 'Timeline estimation',
      StartTime: new Date(2018, 3, 3, 9, 0),
      EndTime: new Date(2018, 3, 3, 11, 30),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 1
  }, {
      Id: 6,
      Subject: 'Developers Meeting',
      StartTime: new Date(2018, 3, 3, 14, 0),
      EndTime: new Date(2018, 3, 3, 16, 45),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 2
  }, {
      Id: 7,
      Subject: 'Project Review',
      StartTime: new Date(2018, 3, 4, 11, 15),
      EndTime: new Date(2018, 3, 4, 13, 0),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 1
  }, {
      Id: 8,
      Subject: 'Manual testing',
      StartTime: new Date(2018, 3, 4, 9, 15),
      EndTime: new Date(2018, 3, 4, 11, 45),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 2
  }, {
      Id: 9,
      Subject: 'Project Preview',
      StartTime: new Date(2018, 3, 5, 9, 30),
      EndTime: new Date(2018, 3, 5, 12, 45),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 1
  }, {
      Id: 10,
      Subject: 'Cross-browser testing',
      StartTime: new Date(2018, 3, 5, 13, 45),
      EndTime: new Date(2018, 3, 5, 16, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 11,
      Subject: 'Bug Automation',
      StartTime: new Date(2018, 3, 6, 10, 0),
      EndTime: new Date(2018, 3, 6, 12, 15),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 1
  }, {
      Id: 12,
      Subject: 'Functionality testing',
      StartTime: new Date(2018, 3, 6, 9, 0),
      EndTime: new Date(2018, 3, 6, 11, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 13,
      Subject: 'Resolution-based testing',
      StartTime: new Date(2018, 3, 7, 13, 0),
      EndTime: new Date(2018, 3, 7, 15, 15),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 1
  }, {
      Id: 14,
      Subject: 'Test report Validation',
      StartTime: new Date(2018, 3, 7, 9),
      EndTime: new Date(2018, 3, 7, 11),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 15,
      Subject: 'Test case correction',
      StartTime: new Date(2018, 3, 8, 9, 45),
      EndTime: new Date(2018, 3, 8, 11, 30),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 1
  }, {
      Id: 16,
      Subject: 'Run test cases',
      StartTime: new Date(2018, 3, 8, 10, 30),
      EndTime: new Date(2018, 3, 8, 13, 0),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 17,
      Subject: 'Quality Analysis',
      StartTime: new Date(2018, 3, 9, 12),
      EndTime: new Date(2018, 3, 9, 15, 30),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 1
  }, {
      Id: 18,
      Subject: 'Debugging',
      StartTime: new Date(2018, 3, 9, 9, 0),
      EndTime: new Date(2018, 3, 9, 11, 15),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 19,
      Subject: 'Exception handling',
      StartTime: new Date(2018, 3, 10, 10, 10),
      EndTime: new Date(2018, 3, 10, 13, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 20,
      Subject: 'Decoding',
      StartTime: new Date(2018, 3, 10, 10, 30),
      EndTime: new Date(2018, 3, 10, 12, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 21,
      Subject: 'workflow Analysis',
      StartTime: new Date(2018, 3, 11, 9, 30),
      EndTime: new Date(2018, 3, 11, 11, 30),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 1
  }, {
      Id: 22,
      Subject: 'Requirement planning',
      StartTime: new Date(2018, 3, 11, 12, 30),
      EndTime: new Date(2018, 3, 11, 14, 45),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 2
  }, {
      Id: 23,
      Subject: 'Quality Analysis',
      StartTime: new Date(2018, 3, 12, 10),
      EndTime: new Date(2018, 3, 12, 12, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 1
  }, {
      Id: 24,
      Subject: 'Resource planning',
      StartTime: new Date(2018, 3, 12, 13),
      EndTime: new Date(2018, 3, 12, 14, 30),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 2
  }, {
      Id: 25,
      Subject: 'Timeline estimation',
      StartTime: new Date(2018, 3, 13, 9),
      EndTime: new Date(2018, 3, 13, 11),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 1
  }, {
      Id: 26,
      Subject: 'Developers Meeting',
      StartTime: new Date(2018, 3, 13, 14),
      EndTime: new Date(2018, 3, 13, 15, 45),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 2
  }, {
      Id: 27,
      Subject: 'Project Review',
      StartTime: new Date(2018, 3, 14, 11),
      EndTime: new Date(2018, 3, 14, 13),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 1
  }, {
      Id: 28,
      Subject: 'Manual testing',
      StartTime: new Date(2018, 3, 14, 9),
      EndTime: new Date(2018, 3, 14, 11, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 29,
      Subject: 'Project Preview',
      StartTime: new Date(2018, 3, 15, 9, 30),
      EndTime: new Date(2018, 3, 15, 11),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 1
  }, {
      Id: 30,
      Subject: 'Cross-browser testing',
      StartTime: new Date(2018, 3, 15, 14),
      EndTime: new Date(2018, 3, 15, 16, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 31,
      Subject: 'Bug Automation',
      StartTime: new Date(2018, 3, 16, 10),
      EndTime: new Date(2018, 3, 16, 11),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 1
  }, {
      Id: 32,
      Subject: 'Functionality testing',
      StartTime: new Date(2018, 3, 16, 9),
      EndTime: new Date(2018, 3, 16, 11, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 33,
      Subject: 'Resolution-based testing',
      StartTime: new Date(2018, 3, 17, 14),
      EndTime: new Date(2018, 3, 17, 15),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 1
  }, {
      Id: 34,
      Subject: 'Test report Validation',
      StartTime: new Date(2018, 3, 17, 9),
      EndTime: new Date(2018, 3, 17, 11),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 2
  }, {
      Id: 35,
      Subject: 'Test case correction',
      StartTime: new Date(2018, 3, 18, 10),
      EndTime: new Date(2018, 3, 18, 11, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 1
  }, {
      Id: 36,
      Subject: 'Run test cases',
      StartTime: new Date(2018, 3, 18, 10),
      EndTime: new Date(2018, 3, 18, 10, 30),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 2
  }, {
      Id: 37,
      Subject: 'Bug fixing',
      StartTime: new Date(2018, 3, 9, 10),
      EndTime: new Date(2018, 3, 9, 10, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 1
  }, {
      Id: 38,
      Subject: 'Debugging',
      StartTime: new Date(2018, 3, 19, 9),
      EndTime: new Date(2018, 3, 19, 10, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 39,
      Subject: 'Exception handling',
      StartTime: new Date(2018, 3, 20, 10),
      EndTime: new Date(2018, 3, 20, 11),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 1
  }, {
      Id: 40,
      Subject: 'Decoding',
      StartTime: new Date(2018, 3, 20, 10, 30),
      EndTime: new Date(2018, 3, 20, 12, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 41,
      Subject: 'workflow Analysis',
      StartTime: new Date(2018, 3, 21, 9, 30),
      EndTime: new Date(2018, 3, 21, 11, 30),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 1
  }, {
      Id: 42,
      Subject: 'Requirement planning',
      StartTime: new Date(2018, 3, 21, 12, 30),
      EndTime: new Date(2018, 3, 21, 13, 45),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 2
  }, {
      Id: 43,
      Subject: 'Quality Analysis',
      StartTime: new Date(2018, 3, 22, 10),
      EndTime: new Date(2018, 3, 22, 11, 30),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 1
  }, {
      Id: 44,
      Subject: 'Resource planning',
      StartTime: new Date(2018, 3, 4, 10),
      EndTime: new Date(2018, 3, 4, 12, 30),
      IsAllDay: false,
      ProjectId: 3,
      TaskId: 2
  }, {
      Id: 45,
      Subject: 'Timeline estimation',
      StartTime: new Date(2018, 3, 4, 9),
      EndTime: new Date(2018, 3, 4, 11),
      IsAllDay: false,
      ProjectId: 3,
      TaskId: 1
  }, {
      Id: 46,
      Subject: 'Developers Meeting',
      StartTime: new Date(2018, 3, 4, 14, 30),
      EndTime: new Date(2018, 3, 4, 16, 30),
      IsAllDay: false,
      ProjectId: 3,
      TaskId: 2
  }, {
      Id: 47,
      Subject: 'Project Review',
      StartTime: new Date(2018, 3, 4, 14),
      EndTime: new Date(2018, 3, 4, 16),
      IsAllDay: false,
      ProjectId: 3,
      TaskId: 1
  }, {
      Id: 48,
      Subject: 'Manual testing',
      StartTime: new Date(2018, 3, 4, 17, 30),
      EndTime: new Date(2018, 3, 4, 19, 30),
      IsAllDay: false,
      ProjectId: 3,
      TaskId: 2
  }, {
      Id: 49,
      Subject: 'Project Preview',
      StartTime: new Date(2018, 3, 4, 18, 0),
      EndTime: new Date(2018, 3, 4, 20),
      IsAllDay: false,
      ProjectId: 3,
      TaskId: 1
  }, {
      Id: 50,
      Subject: 'Cross-browser testing',
      StartTime: new Date(2018, 3, 25, 14),
      EndTime: new Date(2018, 3, 25, 15, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 51,
      Subject: 'Bug Automation',
      StartTime: new Date(2018, 3, 26, 10),
      EndTime: new Date(2018, 3, 26, 11),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 1
  }, {
      Id: 52,
      Subject: 'Functionality testing',
      StartTime: new Date(2018, 3, 26, 9),
      EndTime: new Date(2018, 3, 26, 11, 30),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 2
  }, {
      Id: 53,
      Subject: 'Resolution-based testing',
      StartTime: new Date(2018, 3, 27, 14),
      EndTime: new Date(2018, 3, 27, 15),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 1
  }, {
      Id: 54,
      Subject: 'Test report Validation',
      StartTime: new Date(2018, 3, 27, 9),
      EndTime: new Date(2018, 3, 27, 11),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 55,
      Subject: 'Test case correction',
      StartTime: new Date(2018, 3, 28, 10),
      EndTime: new Date(2018, 3, 28, 11, 30),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 1
  }, {
      Id: 56,
      Subject: 'Run test cases',
      StartTime: new Date(2018, 3, 28, 10),
      EndTime: new Date(2018, 3, 28, 10, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 57,
      Subject: 'Bug fixing',
      StartTime: new Date(2018, 3, 29, 12),
      EndTime: new Date(2018, 3, 29, 12, 30),
      IsAllDay: false,
      ProjectId: 1,
      TaskId: 1
  }, {
      Id: 58,
      Subject: 'Debugging',
      StartTime: new Date(2018, 3, 29, 9),
      EndTime: new Date(2018, 3, 29, 10, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }, {
      Id: 59,
      Subject: 'Exception handling',
      StartTime: new Date(2018, 3, 30, 10),
      EndTime: new Date(2018, 3, 30, 11),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 1
  }, {
      Id: 60,
      Subject: 'Decoding',
      StartTime: new Date(2018, 3, 30, 10, 30),
      EndTime: new Date(2018, 3, 30, 12, 30),
      IsAllDay: false,
      ProjectId: 2,
      TaskId: 2
  }
];

export function generateResourceData(
  startId: number = 1, endId: number = 100, text: string = '', isAddGroupId: boolean = false, groupStartId?: number, groupEndId?: any):
  Object[] {
  const data: { [key: string]: Object }[] = [];
  const resData: { [key: string]: Object }[] = [
    { text: 'Nancy', color: '#ffaa00' },
    { text: 'Steven', color: '#f8a398' },
    { text: 'Michael', color: '#7499e1' }
  ];
  for (let a: number = startId; a <= endId; a++) {
    const n: number = Math.floor(Math.random() * resData.length);
    data.push({
      Id: a,
      Text: text + a + '',
      Color: resData[n]['color']
    });
  }
  if (isAddGroupId) {
    let i: any = groupStartId;
    for (const d of data) {
      d['GroupID'] = i;
      d['Text'] += '_' + d['GroupID'];
      i++;
      if (i > groupEndId) {
        i = groupStartId;
      }
    }
  }
  return data;
}

export function addResourceField(eventData: Record<string, any>[], field: string, start: number, end: number, groupField?: string, groupStart?: number, groupEnd?: any, resData?: Record<string, any>[]): void {
  if (!groupField) {
    let i: number = start;
    for (const data of eventData) {
      data[field] = i;
      i++;
      if (i > end) {
        i = start;
      }
    }
  } else {
    const dm: DataManager = new DataManager({ json: eventData });
    const dm1: DataManager = new DataManager({ json: resData });
    for (let a: any = groupStart; a <= groupEnd; a++) {
      const eve: Record<string, any>[] = dm.executeLocal(new Query().where(groupField, 'equal', a));
      const filteredRes: Record<string, any>[] = dm1.executeLocal(new Query().where('GroupID', 'equal', a).select(['Id']));
      const possibleIds: number[] = filteredRes.map((a: Record<string, any>) => a['Id']);
      const addField: Function = (events: Record<string, any>[], list: number[]) => {
        let index = 0;
        for (let i = 0; i < events.length; i++) {
          events[i][field] = list[index];
          index++;
          if (index >= list.length) {
            index = 0;
          }
        }
      };
      addField(eve, possibleIds);
    }
  }
}

export function generateEventData(startDate: Date, endDate: Date, eventCount: number): Record<string, any>[] {
  const data: Record<string, any>[] = [];
  const names: string[] = [
    'Bering Sea Gold', 'Technology', 'Maintenance', 'Meeting', 'Travelling', 'Annual Conference', 'Birthday Celebration',
    'Farewell Celebration', 'Wedding Aniversary', 'Alaska: The Last Frontier', 'Deadest Catch', 'Sports Day',
    'MoonShiners', 'Close Encounters', 'HighWay Thru Hell', 'Daily Planet', 'Cash Cab', 'Basketball Practice',
    'Rugby Match', 'Guitar Class', 'Music Lessons', 'Doctor checkup', 'Brazil - Mexico', 'Opening ceremony', 'Final presentation'
  ];
  const msPerHour: number = 1000 * 60 * 60;
  let id = 1;
  const incMs: number = (msPerHour * 24) * 1;
  const generate: Function = () => {
    const start: number = startDate.getTime();
    const end: number = endDate.getTime();
    for (let a = start; a < end; a += incMs) {
      const count: number = Math.floor((Math.random() * 9) + 1);
      for (let b = 0; b < count; b++) {
        const hour: number = Math.floor(Math.random() * 100) % 24;
        const minutes: number = Math.round((Math.floor(Math.random() * 100) % 60) / 5) * 5;
        const nCount: number = Math.floor(Math.random() * names.length);
        const startDate: Date = new Date(new Date(a).setHours(hour, minutes));
        const endDate: Date = new Date(startDate.getTime() + (msPerHour * 2.5));
        data.push({
          Id: id,
          Subject: names[nCount],
          StartTime: startDate,
          EndTime: endDate,
          IsAllDay: (id % 10) ? false : true
        });
        if (data.length >= eventCount) {
          return;
        }
        id++;
      }
    }
  };
  while (data.length < eventCount) {
    generate();
  }
  return data;
}

export function cloneDataSource(datas: Record<string, any>[]): Record<string, any>[] {
  const dataSrc: Record<string, any>[] = [];
  for (let i = 0; i < datas.length; i++) {
    dataSrc.push(extend({}, datas[i]));
  }
  return dataSrc;
}

export function generateObject(): Record<string, any>[] {
  const data: Record<string, any>[] = [];
  const names: string[] = [
    'Bering Sea Gold', 'Technology', 'Maintenance', 'Meeting', 'Travelling', 'Annual Conference', 'Birthday Celebration',
    'Farewell Celebration', 'Wedding Anniversary', 'Alaska: The Last Frontier', 'Deadest Catch', 'Sports Day',
    'MoonShiners', 'Close Encounters', 'HighWay Thru Hell', 'Daily Planet', 'Cash Cab', 'Basketball Practice',
    'Rugby Match', 'Guitar Class', 'Music Lessons', 'Doctor checkup', 'Brazil - Mexico', 'Opening ceremony', 'Final presentation'
  ];
  const start: number = new Date(2017, 0, 1).getTime();
  const end: number = new Date(2018, 11, 31).getTime();
  const dayCount: number = 1000 * 60 * 60;
  for (let a: number = start, id = 3; a < end; a += (dayCount * 24) * 2) {
    const count: number = Math.floor((Math.random() * 9) + 1);
    for (let b = 0; b < count; b++) {
      const hour: number = Math.floor(Math.random() * 100) % 24;
      const minutes: number = Math.round((Math.floor(Math.random() * 100) % 60) / 5) * 5;
      const nCount: number = Math.floor(Math.random() * names.length);
      const startDate: Date = new Date(new Date(a).setHours(hour, minutes));
      const endDate: Date = new Date(startDate.getTime() + (dayCount * 2.5));
      data.push({
        Id: id,
        Subject: names[nCount],
        StartTime: startDate,
        EndTime: endDate,
        IsAllDay: (id % 10) ? false : true
      });
      id++;
    }
  }
  const longerEvent: Record<string, any> = {
    Id: 0,
    StartTime: new Date(2017, 0, 1),
    EndTime: new Date(2017, 0, 10),
    IsAllDay: true,
    Location: 'Chennai'
  };
  const occurrenceEvent: Record<string, any> = {
    Id: 1,
    StartTime: new Date(2017, 0, 1),
    EndTime: new Date(2017, 0, 10),
    IsAllDay: true,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
    RecurrenceId: 0
  };
  const recurrenceEvent: Record<string, any> = {
    Id: 2,
    StartTime: new Date(2017, 0, 1),
    EndTime: new Date(2017, 0, 10),
    IsAllDay: true,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1'
  };
  data.push(longerEvent);
  data.push(occurrenceEvent);
  data.push(recurrenceEvent);
  return data;
}

export const resourceData: Record<string, any>[] = [
  {
    Id: 1,
    Subject: 'Nancy',
    StartTime: new Date(2018, 3, 1, 10, 0),
    EndTime: new Date(2018, 3, 1, 12, 30),
    IsAllDay: false,
    HallId: 1,
    RoomId: 1,
    OwnerId: 1
  }, {
    Id: 2,
    Subject: 'Michael',
    StartTime: new Date(2018, 3, 1, 10, 0),
    EndTime: new Date(2018, 3, 1, 12, 30),
    IsAllDay: false,
    HallId: 1,
    RoomId: 1,
    OwnerId: 3
  }, {
    Id: 3,
    Subject: 'Steven',
    StartTime: new Date(2018, 3, 1, 10, 0),
    EndTime: new Date(2018, 3, 1, 12, 30),
    IsAllDay: false,
    HallId: 1,
    RoomId: 2,
    OwnerId: 2
  }, {
    Id: 4,
    Subject: 'Meeting',
    StartTime: new Date(2018, 3, 4, 14, 0),
    EndTime: new Date(2018, 3, 4, 15, 30),
    IsAllDay: false,
    HallId: 1,
    RoomId: 1,
    OwnerId: 1
  }, {
    Id: 5,
    Subject: 'Conference',
    StartTime: new Date(2018, 3, 3, 8, 0),
    EndTime: new Date(2018, 3, 3, 9, 30),
    IsAllDay: false,
    HallId: 1,
    RoomId: 1,
    OwnerId: 3
  }, {
    Id: 6,
    Subject: 'Break Time',
    StartTime: new Date(2018, 3, 5, 13, 0),
    EndTime: new Date(2018, 3, 5, 14, 0),
    IsAllDay: false,
    HallId: 1,
    RoomId: 2,
    OwnerId: 2
  }, {
    Id: 7,
    Subject: 'Holiday',
    StartTime: new Date(2018, 3, 5),
    EndTime: new Date(2018, 3, 7),
    IsAllDay: true,
    HallId: 1,
    RoomId: 1,
    OwnerId: 1
  }, {
    Id: 8,
    Subject: 'Sick Leave',
    StartTime: new Date(2018, 3, 5),
    EndTime: new Date(2018, 3, 6),
    IsAllDay: true,
    HallId: 1,
    RoomId: 1,
    OwnerId: 3
  }, {
    Id: 9,
    Subject: 'Weekend',
    StartTime: new Date(2018, 3, 7),
    EndTime: new Date(2018, 3, 9),
    IsAllDay: true,
    HallId: 1,
    RoomId: 2,
    OwnerId: 2
  }
];

export const resourceGroupData: Record<string, any>[] = [
  {
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2018, 3, 1, 10, 0),
    EndTime: new Date(2018, 3, 1, 12, 30),
    IsAllDay: false,
    RoomId: [1, 2],
    OwnerId: [1, 2, 3]
  }, {
    Id: 2,
    Subject: 'Conference',
    StartTime: new Date(2018, 3, 4, 12, 0),
    EndTime: new Date(2018, 3, 4, 13, 30),
    IsAllDay: false,
    RoomId: [1],
    OwnerId: [1, 3]
  }, {
    Id: 3,
    Subject: 'Travelling',
    StartTime: new Date(2018, 3, 5),
    EndTime: new Date(2018, 3, 7),
    IsAllDay: true,
    RoomId: [1, 2],
    OwnerId: [1, 2]
  }, {
    Id: 4,
    Subject: 'Events - Within a day',
    StartTime: new Date(2018, 4, 1, 10, 0),
    EndTime: new Date(2018, 4, 1, 12, 30),
    IsAllDay: false,
    RoomId: [2, 3],
    OwnerId: [2, 3]
  }, {
    Id: 5,
    Subject: 'Spanned Event - Less than 24',
    StartTime: new Date(2018, 3, 30, 18, 0),
    EndTime: new Date(2018, 4, 1, 10, 30),
    IsAllDay: false,
    RoomId: [1, 2],
    OwnerId: [4, 2]
  }, {
    Id: 6,
    Subject: 'Spanned Event - Greater than 24',
    StartTime: new Date(2018, 4, 1, 18, 0),
    EndTime: new Date(2018, 4, 3, 10, 30),
    IsAllDay: false,
    RoomId: [3],
    OwnerId: [6, 3]
  }, {
    Id: 7,
    Subject: 'Spanned Event - Previous week',
    StartTime: new Date(2018, 3, 27, 15, 0),
    EndTime: new Date(2018, 3, 30, 12, 30),
    IsAllDay: false,
    RoomId: [2],
    OwnerId: [5, 8]
  }, {
    Id: 8,
    Subject: 'Spanned  Event - Same week',
    StartTime: new Date(2018, 3, 30, 10, 0),
    EndTime: new Date(2018, 4, 3, 13, 0),
    IsAllDay: false,
    RoomId: [2, 3],
    OwnerId: [2, 5, 9]
  }, {
    Id: 9,
    Subject: 'Spanned Event - Next week',
    StartTime: new Date(2018, 4, 2, 15, 30),
    EndTime: new Date(2018, 4, 8, 18, 0),
    IsAllDay: false,
    RoomId: [1],
    OwnerId: [6]
  }, {
    Id: 10,
    Subject: 'Recurrence Event - Previous week',
    StartTime: new Date(2018, 3, 28, 10, 15),
    EndTime: new Date(2018, 4, 1, 11, 45),
    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=SA;INTERVAL=1;COUNT=3',
    IsAllDay: false,
    RoomId: [1, 3],
    OwnerId: [4, 6, 7, 10]
  }, {
    Id: 11,
    Subject: 'All Day Event - Current date',
    StartTime: new Date(2018, 4, 1),
    EndTime: new Date(2018, 4, 2),
    IsAllDay: true,
    RoomId: [3],
    OwnerId: [3, 6, 9]
  }, {
    Id: 12,
    Subject: 'All Day Event - Previous week',
    StartTime: new Date(2018, 3, 26, 10, 0),
    EndTime: new Date(2018, 3, 30, 11, 30),
    IsAllDay: true,
    RoomId: [1],
    OwnerId: [1, 4, 7]
  }, {
    Id: 13,
    Subject: 'All Day Event - Next week',
    StartTime: new Date(2018, 4, 4, 10, 0),
    EndTime: new Date(2018, 4, 8, 11, 30),
    IsAllDay: true,
    RoomId: [2],
    OwnerId: [2, 5, 8]
  }, {
    Id: 14,
    Subject: 'Recurrence Event - Same day',
    StartTime: new Date(2018, 4, 1, 10, 15),
    EndTime: new Date(2018, 4, 1, 14, 45),
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3',
    IsAllDay: false,
    RoomId: [1, 2],
    OwnerId: [1, 8, 10]
  }, {
    Id: 15,
    Subject: 'Recurrence Event - Less than 24',
    StartTime: new Date(2018, 4, 3, 15, 0),
    EndTime: new Date(2018, 4, 4, 10, 45),
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3',
    IsAllDay: false,
    RoomId: [1, 3],
    OwnerId: [7, 10]
  }, {
    Id: 16,
    Subject: 'Recurrence Event - Greater than 24',
    StartTime: new Date(2018, 3, 30, 15, 0),
    EndTime: new Date(2018, 4, 2, 16, 45),
    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO;INTERVAL=1;COUNT=3',
    IsAllDay: false,
    RoomId: [1, 2, 3],
    OwnerId: [2, 4, 10, 7]
  }, {
    Id: 17,
    Subject: 'Recurrence Event - Next week',
    StartTime: new Date(2018, 4, 3, 2, 0),
    EndTime: new Date(2018, 4, 7, 16, 45),
    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=FR;INTERVAL=1;COUNT=5',
    IsAllDay: false,
    RoomId: [1, 2, 3],
    OwnerId: [1, 2, 3]
  }, {
    Id: 18,
    Subject: 'Recurrence Event - Same day',
    StartTime: new Date(2018, 4, 1, 10, 15),
    EndTime: new Date(2018, 4, 1, 14, 45),
    IsAllDay: false,
    RoomId: [1, 2, 3],
    OwnerId: [2, 4, 6]
  }
];

export const timelineData: Record<string, any>[] = [
  {
    Id: 1,
    Subject: 'Events - Within a day',
    StartTime: new Date(2018, 4, 1, 10, 0),
    EndTime: new Date(2018, 4, 1, 12, 30),
    IsAllDay: false
  }, {
    Id: 2,
    Subject: 'Spanned Event - Less than 24',
    StartTime: new Date(2018, 3, 30, 18, 0),
    EndTime: new Date(2018, 4, 1, 10, 30),
    IsAllDay: false
  }, {
    Id: 3,
    Subject: 'Spanned Event - Greater than 24',
    StartTime: new Date(2018, 4, 1, 18, 0),
    EndTime: new Date(2018, 4, 3, 10, 30),
    IsAllDay: false
  }, {
    Id: 4,
    Subject: 'Spanned Event - Previous week',
    StartTime: new Date(2018, 3, 27, 15, 0),
    EndTime: new Date(2018, 3, 30, 12, 30),
    IsAllDay: false
  }, {
    Id: 5,
    Subject: 'Spanned  Event - Same week',
    StartTime: new Date(2018, 3, 30, 10, 0),
    EndTime: new Date(2018, 4, 3, 13, 0),
    IsAllDay: false
  }, {
    Id: 6,
    Subject: 'Spanned Event - Next week',
    StartTime: new Date(2018, 4, 2, 15, 30),
    EndTime: new Date(2018, 4, 8, 18, 0),
    IsAllDay: false
  }, {
    Id: 7,
    Subject: 'Recurrence Event - Previous week',
    StartTime: new Date(2018, 3, 28, 10, 15),
    EndTime: new Date(2018, 4, 1, 11, 45),
    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=SA;INTERVAL=1;COUNT=3',
    IsAllDay: false
  }, {
    Id: 8,
    Subject: 'All Day Event - Current date',
    StartTime: new Date(2018, 4, 1),
    EndTime: new Date(2018, 4, 2),
    IsAllDay: true
  }, {
    Id: 9,
    Subject: 'All Day Event - Previous week',
    StartTime: new Date(2018, 3, 26, 10, 0),
    EndTime: new Date(2018, 3, 30, 11, 30),
    IsAllDay: true
  }, {
    Id: 10,
    Subject: 'All Day Event - Next week',
    StartTime: new Date(2018, 4, 4, 10, 0),
    EndTime: new Date(2018, 4, 8, 11, 30),
    IsAllDay: true
  }, {
    Id: 11,
    Subject: 'Same Time',
    StartTime: new Date(2018, 4, 1, 13, 0),
    EndTime: new Date(2018, 4, 1, 14, 0),
    IsAllDay: false
  }, {
    Id: 12,
    Subject: 'Same Time',
    StartTime: new Date(2018, 4, 1, 13, 0),
    EndTime: new Date(2018, 4, 1, 14, 0),
    IsAllDay: false
  }, {
    Id: 13,
    Subject: 'Same Time',
    StartTime: new Date(2018, 4, 1, 13, 0),
    EndTime: new Date(2018, 4, 1, 14, 0),
    IsAllDay: false
  }, {
    Id: 14,
    Subject: 'Same Time',
    StartTime: new Date(2018, 4, 1, 13, 0),
    EndTime: new Date(2018, 4, 1, 14, 0),
    IsAllDay: false
  }, {
    Id: 15,
    Subject: 'Same Time',
    StartTime: new Date(2018, 4, 1, 13, 0),
    EndTime: new Date(2018, 4, 1, 14, 0),
    IsAllDay: false
  }, {
    Id: 16,
    Subject: 'Same Time',
    StartTime: new Date(2018, 4, 1, 13, 0),
    EndTime: new Date(2018, 4, 1, 14, 0),
    IsAllDay: false
  }, {
    Id: 17,
    Subject: 'Same Time',
    StartTime: new Date(2018, 4, 1, 13, 0),
    EndTime: new Date(2018, 4, 1, 14, 0),
    IsAllDay: false
  }, {
    Id: 18,
    Subject: 'Recurrence Event - Same day',
    StartTime: new Date(2018, 4, 1, 10, 15),
    EndTime: new Date(2018, 4, 1, 14, 45),
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3',
    IsAllDay: false
  }, {
    Id: 19,
    Subject: 'Recurrence Event - Less than 24',
    StartTime: new Date(2018, 4, 3, 15, 0),
    EndTime: new Date(2018, 4, 4, 10, 45),
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3',
    IsAllDay: false
  }, {
    Id: 20,
    Subject: 'Recurrence Event - Greater than 24',
    StartTime: new Date(2018, 3, 30, 15, 0),
    EndTime: new Date(2018, 4, 2, 16, 45),
    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO;INTERVAL=1;COUNT=3',
    IsAllDay: false
  }, {
    Id: 21,
    Subject: 'Recurrence Event - Next week',
    StartTime: new Date(2018, 4, 3, 2, 0),
    EndTime: new Date(2018, 4, 7, 16, 45),
    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=FR;INTERVAL=1;COUNT=3',
    IsAllDay: false
  }
];

export const timelineResourceData: Record<string, any>[] = [
  {
    Id: 1,
    Subject: 'Events - Within a day',
    StartTime: new Date(2018, 4, 1, 10, 0),
    EndTime: new Date(2018, 4, 1, 12, 30),
    IsAllDay: false,
    FId: 1,
    HallId: 1,
    RoomId: 1,
    OwnerId: 1
  }, {
    Id: 2,
    Subject: 'Spanned Event - Less than 24',
    StartTime: new Date(2018, 3, 30, 18, 0),
    EndTime: new Date(2018, 4, 1, 10, 30),
    IsAllDay: false,
    FId: 2,
    HallId: 2,
    RoomId: 2,
    OwnerId: 2
  }, {
    Id: 3,
    Subject: 'Spanned Event - Greater than 24',
    StartTime: new Date(2018, 4, 1, 18, 0),
    EndTime: new Date(2018, 4, 3, 10, 30),
    IsAllDay: false,
    FId: 1,
    HallId: 1,
    RoomId: 1,
    OwnerId: 3
  }, {
    Id: 4,
    Subject: 'Spanned Event - Previous week',
    StartTime: new Date(2018, 3, 27, 15, 0),
    EndTime: new Date(2018, 3, 30, 12, 30),
    IsAllDay: false,
    FId: 1,
    HallId: 1,
    RoomId: 1,
    OwnerId: 4
  }, {
    Id: 5,
    Subject: 'Spanned  Event - Same week',
    StartTime: new Date(2018, 3, 30, 10, 0),
    EndTime: new Date(2018, 4, 3, 13, 0),
    IsAllDay: false,
    FId: 2,
    HallId: 2,
    RoomId: 2,
    OwnerId: 5
  }, {
    Id: 6,
    Subject: 'Spanned Event - Next week',
    StartTime: new Date(2018, 4, 2, 15, 30),
    EndTime: new Date(2018, 4, 8, 18, 0),
    IsAllDay: false,
    FId: 1,
    HallId: 1,
    RoomId: 1,
    OwnerId: 6
  }, {
    Id: 7,
    Subject: 'Recurrence Event - Previous week',
    StartTime: new Date(2018, 3, 28, 10, 15),
    EndTime: new Date(2018, 4, 1, 11, 45),
    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=SA;INTERVAL=1;COUNT=3',
    IsAllDay: false,
    FId: 1,
    HallId: 1,
    RoomId: 1,
    OwnerId: 7
  }, {
    Id: 8,
    Subject: 'All Day Event - Current date',
    StartTime: new Date(2018, 4, 1),
    EndTime: new Date(2018, 4, 2),
    IsAllDay: true,
    FId: 2,
    HallId: 2,
    RoomId: 2,
    OwnerId: 8
  }, {
    Id: 9,
    Subject: 'All Day Event - Previous week',
    StartTime: new Date(2018, 3, 26, 10, 0),
    EndTime: new Date(2018, 3, 30, 11, 30),
    IsAllDay: true,
    FId: 1,
    HallId: 1,
    RoomId: 1,
    OwnerId: 9
  }, {
    Id: 10,
    Subject: 'All Day Event - Next week',
    StartTime: new Date(2018, 4, 4, 10, 0),
    EndTime: new Date(2018, 4, 8, 11, 30),
    IsAllDay: true,
    FId: 1,
    HallId: 1,
    RoomId: 1,
    OwnerId: 10
  }, {
    Id: 11,
    Subject: 'Recurrence Event - Same day',
    StartTime: new Date(2018, 4, 1, 10, 15),
    EndTime: new Date(2018, 4, 1, 14, 45),
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3',
    IsAllDay: false,
    FId: 1,
    HallId: 1,
    RoomId: 1,
    OwnerId: 10
  }, {
    Id: 12,
    Subject: 'Recurrence Event - Less than 24',
    StartTime: new Date(2018, 4, 3, 15, 0),
    EndTime: new Date(2018, 4, 4, 10, 45),
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3',
    IsAllDay: false,
    FId: 2,
    HallId: 2,
    RoomId: 2,
    OwnerId: 5
  }, {
    Id: 13,
    Subject: 'Recurrence Event - Greater than 24',
    StartTime: new Date(2018, 3, 30, 15, 0),
    EndTime: new Date(2018, 4, 2, 16, 45),
    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO;INTERVAL=1;COUNT=3',
    IsAllDay: false,
    FId: 1,
    HallId: 1,
    RoomId: 1,
    OwnerId: 4
  }, {
    Id: 14,
    Subject: 'Recurrence Event - Next week',
    StartTime: new Date(2018, 4, 3, 2, 0),
    EndTime: new Date(2018, 4, 7, 16, 45),
    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=FR;INTERVAL=1;COUNT=3',
    IsAllDay: false,
    FId: 1,
    HallId: 1,
    RoomId: 1,
    OwnerId: 6
  }, {
    Id: 15,
    Subject: 'Recurrence Event - Same day',
    StartTime: new Date(2018, 4, 1, 10, 15),
    EndTime: new Date(2018, 4, 1, 14, 45),
    IsAllDay: false,
    FId: 1,
    HallId: 1,
    RoomId: 1,
    OwnerId: 10
  }
];

export const levelBasedData: Record<string, any>[] = [
  {
    Id: 1,
    Subject: 'Events - Within a day',
    StartTime: new Date(2018, 4, 1, 10, 0),
    EndTime: new Date(2018, 4, 1, 12, 30),
    IsAllDay: false,
    FId: 1,
    HallId: 1,
    RoomId: 1,
  }, {
    Id: 2,
    Subject: 'Spanned Event - Less than 24',
    StartTime: new Date(2018, 3, 30, 18, 0),
    EndTime: new Date(2018, 4, 1, 10, 30),
    IsAllDay: false,
    FId: 2,
    HallId: 2,
    RoomId: 2,
  }, {
    Id: 3,
    Subject: 'Spanned Event - Greater than 24',
    StartTime: new Date(2018, 4, 1, 18, 0),
    EndTime: new Date(2018, 4, 3, 10, 30),
    IsAllDay: false,
    FId: 1
  }, {
    Id: 4,
    Subject: 'Spanned Event - Previous week',
    StartTime: new Date(2018, 3, 27, 15, 0),
    EndTime: new Date(2018, 4, 2, 12, 30),
    IsAllDay: false,
    FId: 1,
    HallId: 1
  }, {
    Id: 5,
    Subject: 'Recurrence  Event',
    StartTime: new Date(2018, 4, 1, 10, 0),
    EndTime: new Date(2018, 4, 1, 13, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
    FId: 2,
    HallId: 2,
    RoomId: 2,
    OwnerId: 4
  }, {
    Id: 6,
    Subject: 'Spanned Event - Next week',
    StartTime: new Date(2018, 4, 1, 15, 30),
    EndTime: new Date(2018, 4, 8, 18, 0),
    IsAllDay: false,
    FId: 1,
    HallId: 1,
    RoomId: 1,
    OwnerId: 1
  }
];
