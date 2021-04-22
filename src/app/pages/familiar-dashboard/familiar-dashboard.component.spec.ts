import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliarDashboardComponent } from './familiar-dashboard.component';

describe('FamiliarDashboardComponent', () => {
  let component: FamiliarDashboardComponent;
  let fixture: ComponentFixture<FamiliarDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliarDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliarDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
