import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResidenceService } from '../residence.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setup-residence',
  templateUrl: './setupResidence.component.html',
  styleUrls: ['./setupResidence.component.scss']
})

export class SetupResiComponent {
  types = ['Condominium', 'Bungalow',
            'Terrace', 'Apartment'];
  constructor(public residenceService: ResidenceService, private router: Router) {}
  onAddResidence(form: NgForm) {
    if (form.invalid) {
      alert('Please Fill up the form correctly');
      return;
    }
    this.residenceService.addResidence(form.value.name, form.value.address,
    form.value.noUnit, form.value.monthlyRental, form.value.sizePerUnit, form.value.facilities);
    alert('Residence Created!');
    this.router.navigate(['viewResidence']);
    form.resetForm();
  }
}
