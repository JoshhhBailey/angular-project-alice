import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeridercoComponent } from './freeriderco.component';

describe('FreeridercoComponent', () => {
  let component: FreeridercoComponent;
  let fixture: ComponentFixture<FreeridercoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeridercoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeridercoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
