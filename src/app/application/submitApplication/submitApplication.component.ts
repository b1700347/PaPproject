import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApplicationService } from '../application.service';
import { formatDate } from '@angular/common';

formatDate(new Date(), 'yyyy/MM/dd', 'en');
@Component({
  selector: 'app-submit-application',
  templateUrl: './submitApplication.component.html',
  styleUrls: ['./submitApplication.component.css']
})


export class SubmitAppComponent {
  status = 'New';
  today = new Date();
  constructor(public applicationsService: ApplicationService) {}
  onAddApplication(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.applicationsService.addApplication('1', form.value.enteredDate, this.today, this.status);
    alert('Application Created!');
    form.resetForm();
  }
}
