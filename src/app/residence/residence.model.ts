import { Application } from '../application/application.model';

export interface Residence {
  residenceID: string;
  residenceName: string;
  address: string;
  numUnits: number;
  monthlyRental: number;
  sizePerUnit: number;
  facilities: string;
  applications: Array<Application>;
}
