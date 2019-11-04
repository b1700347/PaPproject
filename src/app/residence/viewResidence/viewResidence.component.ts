import { Component, OnInit, OnDestroy } from '@angular/core';
import { Residence } from '../residence.model';
import { ResidenceService } from '../residence.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-residence',
  templateUrl: './viewResidence.component.html',
  styleUrls: ['./viewResidence.component.css']
})
export class ViewResiComponent implements OnInit {
  residences: Residence[] = [];
  private resiSub: Subscription;

  // constructor function to do method in service
  constructor(public resiService: ResidenceService) {
  }
  ngOnInit() {
    this.resiService.getResidences();
    this.resiSub = this.resiService.getResidenceUpdateListener()
      .subscribe((residences: Residence[]) => {
        this.residences = residences;
      });
  }
  OnDestroy() {
    this.resiSub.unsubscribe();
  }
}
