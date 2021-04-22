import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuarioCreate } from 'src/app/models/Usuario';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { FamiliarService } from '../../services/familiar.service';

@Component( {
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
} )
export class IniciarSesionComponent implements OnInit, OnDestroy {
  anyo: Date;
  recordar: boolean;
  public isCollapsed: boolean;
  usuarioSesion: UsuarioCreate = new UsuarioCreate();

  constructor( private usuarioService: UsuarioService, private familiarService: FamiliarService, private router: Router ) { }

  ngOnInit(): void {
    var html = document.getElementsByTagName( "html" )[0];
    html.classList.add( "auth-layout" );
    var body = document.getElementsByTagName( "body" )[0];
    body.classList.add( "bg-default" );
    this.isCollapsed = true;
    this.anyo = new Date();
    this.recordar = false;
  }

  iniciarSesion( form: NgForm ) {
    if ( !form.valid ) {
      return;
    }
    this.usuarioSesion.RolId = 4;
    this.usuarioService.loginUsuario( this.usuarioSesion ).subscribe( ( resp: any ) => {
      this.familiarService.guardarCorreoFamiliar( resp.correo );
      if ( Number( resp.rolId ) === 2 ) {
        this.router.navigateByUrl( '/fm-dashboard' );
      }
      if ( Number( resp.rolId ) === 3 ) {
        this.router.navigateByUrl( '/landing' );
      }
    } );
  }

  ngOnDestroy() {
    var html = document.getElementsByTagName( "html" )[0];
    html.classList.remove( "auth-layout" );
    var body = document.getElementsByTagName( "body" )[0];
    body.classList.remove( "bg-default" );
  }
}