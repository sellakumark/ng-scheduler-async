export class Customer {
    id!: number;
    //AppID!: number;
    Subject!: string;
    StartTime!: Date;
    EndTime!: Date;
    IsAllDay!: boolean;
  }

export interface UpdateData {
    created: Customer[];
    updated: Customer[];
    deleted: Customer[];
}