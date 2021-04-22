import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFamiliarComponent } from './form-familiar.component';

describe('FormFamiliarComponent', () => {
  let component: FormFamiliarComponent;
  let fixture: ComponentFixture<FormFamiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFamiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
