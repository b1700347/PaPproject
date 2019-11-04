import {Application} from './application.model';
import {Injectable} from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class ApplicationService {
  private Applications: Application[] = []; // define application store array of application
  private appUpdated = new Subject<Application[]>();

  // retrieve all the Applications
  getApplications() {
    return this.Applications;
  }

  // function to get the copy of the original array in order human error prevention
  getPostUpdateListener() {
    return this.appUpdated.asObservable();
  }

  // add application into array
  addApplication(applicationID: string, applicationDate: Date, requiredDate: Date, status: string) {
    const application: Application = {applicationID, applicationDate, requiredDate, status};
    this.Applications.push(application);
    this.appUpdated.next([...this.Applications]); // copy original array
  }

  deleteApplication() {
    this.Applications.pop();
  }
}
