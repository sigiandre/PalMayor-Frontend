import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnfermeroComponent } from './form-enfermero.component';

describe('FormEnfermeroComponent', () => {
  let component: FormEnfermeroComponent;
  let fixture: ComponentFixture<FormEnfermeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEnfermeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEnfermeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
