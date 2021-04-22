import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEnfermerosComponent } from './listar-enfermeros.component';

describe('ListarEnfermerosComponent', () => {
  let component: ListarEnfermerosComponent;
  let fixture: ComponentFixture<ListarEnfermerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEnfermerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEnfermerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
