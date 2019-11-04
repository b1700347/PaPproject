import {Residence} from './residence.model';
import {Injectable} from '@angular/core';

import { Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class ResidenceService {
  private residences: Residence[] = []; // define residence store array of residence
  private resiUpdated = new Subject<Residence[]>();

  constructor(private http: HttpClient) {}

  // retrieve all the residence
  getResidences() {
    this.http.get<{message: string, residences: any}>('http://localhost:3000/api/residences')
    .pipe(map((postData) => {
      return postData.residences.map(residence => {
        return {
          residenceID: residence._id,
          residenceName: residence.residenceName,
          address: residence.address,
          numUnits: residence.numUnits,
          monthlyRental: residence.monthlyRental,
          sizePerUnit: residence.sizePerUnit,
          facilities: residence.facilities,
          applications: residence.applications
        };
      });
    }))
    .subscribe((transformedResidences) => {
      this.residences = transformedResidences;
      this.resiUpdated.next([...this.residences]);
    });
  }

  // function to get the copy of the original array in order human error prevention
  getResidenceUpdateListener() {
    return this.resiUpdated.asObservable();
  }

  // add residence into array
  addResidence(residenceName: string, address: string,
               numUnits: number, monthlyRental: number, sizePerUnit: number, facilities: string) {
    const residence: Residence = {residenceID: null, residenceName: residenceName,
      address: address, numUnits: numUnits, monthlyRental: monthlyRental,
      sizePerUnit: sizePerUnit, facilities: facilities, applications: []};
    this.http
      .post<{message:string}> ('http://localhost:3000/api/residences', residence)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.residences.push(residence);
        this.resiUpdated.next([...this.residences]); // copy original array
      })
  }

  deleteResidence() {

  }
}
