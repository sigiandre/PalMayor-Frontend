import { Injectable } from '@angular/core';
import { UsuarioCreate, Usuario } from '../models/Usuario';
import { HOST } from './api.constant';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Grado } from '../models/Grado';
import { Rol } from '../models/Rol';

@Injectable( {
  providedIn: 'root'
} )
export class UsuarioService {

  private url: string = `${ HOST }/Usuarios`;
  us: Usuario;

  constructor( private http: HttpClient ) { }

  postUsuario( body: UsuarioCreate ): Observable<Usuario> {
    return this.http.post<Usuario>( this.url, body );
  }

  getUsuario( id: Number ): Observable<Usuario> {
    return this.http.get<Usuario>( `${ this.url }/${ id }` );
  }

  loginUsuario( body: UsuarioCreate ): Observable<Usuario> {
    return this.http.post<Usuario>( `${ this.url }/login`, body );
  }

  getCorreos() {
    const listaCorreos = [];
    return this.http.get( `${ this.url }/correos` ).pipe(
      map( ( resp: any ) => {
        resp.forEach( item => listaCorreos.push( item ) );
        return listaCorreos;
      } ) );
  }

  patchUsuario( id: Number, body: any ) {
    return this.http.patch( `${ this.url }/${ id }`, body );
  }

  guardarId( id: Number ) {
    sessionStorage.setItem( 'usuarioId', String( id ) );
  }

}
