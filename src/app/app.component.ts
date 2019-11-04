import { Component } from '@angular/core';
import { Application } from './Application/application.model';
import { Residence } from './residence/residence.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PAP';
  user = 'getUser';

  storeApplication: Application[] = [];
  storeResidence: Residence[] = [];

  onAddApplication(application) {
    this.storeApplication.push(application);
  }
  onAddResidence(residence) {
    this.storeApplication.push(residence);
  }
  onDeleteApplication() {
    this.storeApplication.pop();
  }
}
