import { Component, OnInit, OnDestroy } from '@angular/core';
import { Application } from '../application.model';
import { ApplicationService } from '../application.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-application',
  templateUrl: './viewApplication.component.html',
  styleUrls: ['./viewApplication.component.css']
})
export class ViewAppComponent implements OnInit {
  user = 'HouseOwner';
  applications: Application[] = [];
  private appSub: Subscription;

  // constructor function to do method in service
  constructor(public AppService: ApplicationService) {
  }
  ngOnInit() {
    this.applications = this.AppService.getApplications();
    this.appSub = this.AppService.getPostUpdateListener()
      .subscribe((applications: Application[]) => {
        this.applications = applications;
      });
  }
  OnDestroy() {
    this.appSub.unsubscribe();
  }
  onDeleteApplication() {
    this.AppService.deleteApplication();
  }
}
