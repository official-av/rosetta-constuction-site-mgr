import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborReportComponent } from './labor-report.component';

describe('LaborReportComponent', () => {
  let component: LaborReportComponent;
  let fixture: ComponentFixture<LaborReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaborReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
