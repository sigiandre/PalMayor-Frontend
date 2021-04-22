import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermeroDashboardComponent } from './enfermero-dashboard.component';

describe('EnfermeroDashboardComponent', () => {
  let component: EnfermeroDashboardComponent;
  let fixture: ComponentFixture<EnfermeroDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfermeroDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermeroDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
