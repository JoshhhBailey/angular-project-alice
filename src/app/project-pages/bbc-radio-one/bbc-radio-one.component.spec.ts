import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbcRadioOneComponent } from './bbc-radio-one.component';

describe('BbcRadioOneComponent', () => {
  let component: BbcRadioOneComponent;
  let fixture: ComponentFixture<BbcRadioOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbcRadioOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbcRadioOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
