import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST } from './api.constant';
import { RangoHoraCreate, RangoHora } from '../models/RangoHora';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class RangohoraService {
  private url: string = `${ HOST }/RangoHoras`;

  constructor( private http: HttpClient ) { }

  postRangoHora( body: RangoHoraCreate ): Observable<RangoHora> {
    return this.http.post<RangoHora>( this.url, body );
  }
}
