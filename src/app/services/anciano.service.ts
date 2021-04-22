import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST } from './api.constant';
import { Observable } from 'rxjs';
import { AncianoCreate, Anciano } from '../models/Anciano';

@Injectable( {
  providedIn: 'root'
} )
export class AncianoService {
  private url: string = `${ HOST }/Ancianos`;

  constructor( private http: HttpClient ) { }

  getAncianosFamiliar( correo: string ): Observable<Anciano> {
    return this.http.get<Anciano>( `${ this.url }/familiar/correo/${ correo }` )

  }

  postAnciano( body: AncianoCreate ): Observable<Anciano> {
    return this.http.post<Anciano>( this.url, body );
  }
}
