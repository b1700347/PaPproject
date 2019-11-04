import { Component } from '@angular/core';
import { SetUpResidence } from '../set-up-residence';

@Component({
  selector: 'app-set-up-residence',
  templateUrl: './set-up-residence.component.html',
  styleUrls: ['./set-up-residence.component.scss']
})
export class SetUpResidenceComponent  {

  types = ['Condominium', 'Bungalow',
            'Terrace', 'Apartment'];
  states = ['Wilayah Persekutuan', 'Selangor',
            'Kedah', 'Pahang', 'Perlis', 'Kelantan',
          'Terengganu', 'Melaka', 'Sabah', 'Sarawak', 'Pulau Pinang',
          'Negeri Sembilan', 'Johor', 'Perak'];

  model = new SetUpResidence(18, '', this.types[0], 'Chuck Overstreet', 200, 2);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}

