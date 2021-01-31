import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeridercoClothingComponent } from './freeriderco-clothing.component';

describe('FreeridercoClothingComponent', () => {
  let component: FreeridercoClothingComponent;
  let fixture: ComponentFixture<FreeridercoClothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeridercoClothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeridercoClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
