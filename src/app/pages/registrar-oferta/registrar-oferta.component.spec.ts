import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarOfertaComponent } from './registrar-oferta.component';

describe('RegistrarOfertaComponent', () => {
  let component: RegistrarOfertaComponent;
  let fixture: ComponentFixture<RegistrarOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
