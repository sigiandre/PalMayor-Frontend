import { Injectable } from '@angular/core';
import { HOST } from './api.constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnfermeroService {
  private url: string = `${HOST}/Enfermeros`;
  private urlOferta: string = `${HOST}/EnfermeroOfertas/`;

  constructor(private http: HttpClient) { }

  getEnfermerosByOferta(idOferta: Number) {
    return this.http.get(`${this.urlOferta}/oferta/${idOferta}`)
  }
}
