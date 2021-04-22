import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliarLayoutComponent } from './familiar-layout.component';

describe('FamiliarLayoutComponent', () => {
  let component: FamiliarLayoutComponent;
  let fixture: ComponentFixture<FamiliarLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliarLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
