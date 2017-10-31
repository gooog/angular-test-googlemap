import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetectorComponent } from './location-detector.component';

describe('LocationDetectorComponent', () => {
  let component: LocationDetectorComponent;
  let fixture: ComponentFixture<LocationDetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationDetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
