import { Injectable } from '@angular/core';
import { HOST } from './api.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Familiar, FamiliarCreate } from '../models/Familiar';

@Injectable( {
  providedIn: 'root'
} )
export class FamiliarService {
  private url: string = `${ HOST }/Familiares`;

  constructor( private http: HttpClient ) { }

  getFamiliar( param: string ): Observable<Familiar> {
    return this.http.get<Familiar>( `${ this.url }/correo/${ param }` )
  }

  guardarCorreoFamiliar( correo: string ) {
    sessionStorage.setItem( 'familiarCorreo', correo );
  }

  postFamiliar( body: FamiliarCreate ): Observable<Familiar> {
    return this.http.post<Familiar>( this.url, body );
  }

}
