import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpResidenceComponent } from './set-up-residence.component';

describe('SetUpResidenceComponent', () => {
  let component: SetUpResidenceComponent;
  let fixture: ComponentFixture<SetUpResidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetUpResidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUpResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
