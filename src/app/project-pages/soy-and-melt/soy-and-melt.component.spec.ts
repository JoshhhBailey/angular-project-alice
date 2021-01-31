import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyAndMeltComponent } from './soy-and-melt.component';

describe('SoyAndMeltComponent', () => {
  let component: SoyAndMeltComponent;
  let fixture: ComponentFixture<SoyAndMeltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoyAndMeltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoyAndMeltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
