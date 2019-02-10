import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselReportComponent } from './diesel-report.component';

describe('DieselReportComponent', () => {
  let component: DieselReportComponent;
  let fixture: ComponentFixture<DieselReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieselReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieselReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
