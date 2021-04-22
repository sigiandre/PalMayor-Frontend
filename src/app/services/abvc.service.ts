import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST } from './api.constant';
import { map } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class AbvcService {
  private url: string = `${ HOST }/ABVCs`;

  constructor( private http: HttpClient ) { }

  getABVCs() {
    const listaABVCs = []
    return this.http.get( this.url ).pipe( map( ( resp: any ) => {
      resp.forEach( item => listaABVCs.push( item ) );
      return listaABVCs;
    } ) );
  }
}
