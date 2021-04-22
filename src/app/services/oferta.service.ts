import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST } from './api.constant';
import { Observable } from 'rxjs';
import { Oferta, OfertaCreate } from '../models/Oferta';

@Injectable( {
  providedIn: 'root'
} )
export class OfertaService {
  private url: string = `${ HOST }/Ofertas`;

  constructor( private http: HttpClient ) { }

  getOfertas( param: string ) {
    return this.http.get( `${ this.url }/familiar/correo/${ param }` );
  }

  postOferta( body: OfertaCreate ): Observable<Oferta> {
    return this.http.post<Oferta>( this.url, body );
  }
}
