import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselItemComponent } from './diesel-item.component';

describe('DieselItemComponent', () => {
  let component: DieselItemComponent;
  let fixture: ComponentFixture<DieselItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieselItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
