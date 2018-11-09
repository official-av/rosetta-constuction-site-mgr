import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborItemComponent } from './labor-item.component';

describe('LaborItemComponent', () => {
  let component: LaborItemComponent;
  let fixture: ComponentFixture<LaborItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaborItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
