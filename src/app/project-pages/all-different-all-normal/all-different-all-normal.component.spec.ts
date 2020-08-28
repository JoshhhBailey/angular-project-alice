import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDifferentAllNormalComponent } from './all-different-all-normal.component';

describe('AllDifferentAllNormalComponent', () => {
  let component: AllDifferentAllNormalComponent;
  let fixture: ComponentFixture<AllDifferentAllNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDifferentAllNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDifferentAllNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
