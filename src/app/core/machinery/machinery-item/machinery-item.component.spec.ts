import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryItemComponent } from './machinery-item.component';

describe('MachineryItemComponent', () => {
  let component: MachineryItemComponent;
  let fixture: ComponentFixture<MachineryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
