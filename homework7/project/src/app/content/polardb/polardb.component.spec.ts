import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolardbComponent } from './polardb.component';

describe('PolardbComponent', () => {
  let component: PolardbComponent;
  let fixture: ComponentFixture<PolardbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolardbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolardbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
