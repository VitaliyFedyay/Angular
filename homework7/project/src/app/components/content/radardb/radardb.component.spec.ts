import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadardbComponent } from './radardb.component';

describe('RadardbComponent', () => {
  let component: RadardbComponent;
  let fixture: ComponentFixture<RadardbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadardbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadardbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
