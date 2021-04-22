import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAncianoComponent } from './listar-anciano.component';

describe('ListarAncianoComponent', () => {
  let component: ListarAncianoComponent;
  let fixture: ComponentFixture<ListarAncianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAncianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAncianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
