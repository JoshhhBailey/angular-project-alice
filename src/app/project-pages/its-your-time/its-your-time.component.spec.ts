import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsYourTimeComponent } from './its-your-time.component';

describe('ItsYourTimeComponent', () => {
  let component: ItsYourTimeComponent;
  let fixture: ComponentFixture<ItsYourTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItsYourTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItsYourTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
