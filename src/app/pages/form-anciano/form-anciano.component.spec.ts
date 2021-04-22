import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAncianoComponent } from './form-anciano.component';

describe('FormAncianoComponent', () => {
  let component: FormAncianoComponent;
  let fixture: ComponentFixture<FormAncianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAncianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAncianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
