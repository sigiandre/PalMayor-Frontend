import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component( {
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
} )
export class SeleccionComponent implements OnInit, OnDestroy {
  public isCollapsed: boolean;
  anyo: Date;
  patchDocument: any;
  constructor( private usuarioService: UsuarioService, private router: Router ) { }

  ngOnInit(): void {
    var html = document.getElementsByTagName( "html" )[0];
    html.classList.add( "auth-layout" );
    var body = document.getElementsByTagName( "body" )[0];
    body.classList.add( "bg-default" );
    this.isCollapsed = true;
    this.anyo = new Date()
  }

  seleccionRol( value: string ) {
    this.patchDocument = [{
      "op": "replace",
      "path": "/rolId",
      "value": value
    }]

    this.usuarioService.patchUsuario( Number( sessionStorage.getItem( 'usuarioId' ) ), this.patchDocument ).subscribe(
      resp => {
        if ( value === '2' ) {
          this.router.navigateByUrl( '/registrarfamiliar' )
        }
        if ( value === '3' ) {
          this.router.navigateByUrl( '/registrarenfermero' )
        }
      }
    );

  }

  ngOnDestroy() {
    var html = document.getElementsByTagName( "html" )[0];
    html.classList.remove( "auth-layout" );
    var body = document.getElementsByTagName( "body" )[0];
    body.classList.remove( "bg-default" );
  }

}
