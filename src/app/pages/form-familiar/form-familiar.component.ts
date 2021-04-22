import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Familiar, FamiliarCreate } from '../../models/Familiar';
import { NgForm } from '@angular/forms';
import { PersonaCreate } from '../../models/Persona';
import { FamiliarService } from '../../services/familiar.service';
import { UsuarioService } from '../../services/usuario.service';

@Component( {
  selector: 'app-form-familiar',
  templateUrl: './form-familiar.component.html',
  styleUrls: ['./form-familiar.component.css']
} )
export class FormFamiliarComponent implements OnInit, OnDestroy {

  anyo: Date;
  public isCollapsed: boolean;
  nuevoFamiliar: FamiliarCreate = new FamiliarCreate();
  nuevaPersona: PersonaCreate = new PersonaCreate();
  sexos: any[];
  fotoUrl: string
  fechaNacimientoPersona: any



  constructor( private familiarService: FamiliarService, private usuarioService: UsuarioService, private router: Router ) {

  }

  ngOnInit(): void {
    var html = document.getElementsByTagName( "html" )[0];
    html.classList.add( "auth-layout" );
    var body = document.getElementsByTagName( "body" )[0];
    body.classList.add( "bg-default" );
    this.isCollapsed = true;
    this.anyo = new Date();
    this.sexos = [{ key: 'F', value: 'Femenino' }, { key: 'M', value: 'Masculino' }];
    this.fotoUrl = "https://ath2.unileverservices.com/wp-content/uploads/sites/13/2019/12/09152410/pelo-platinado-para-hombre-3-1024x1024.jpg"
  }

  registrarFamiliar( form: NgForm ) {
    if ( !form.valid ) {
      return;
    }

    this.nuevaPersona.Foto = this.fotoUrl
    this.nuevaPersona.FechaNacimiento = new Date( this.fechaNacimientoPersona.year,
      this.fechaNacimientoPersona.month,
      this.fechaNacimientoPersona.day )
    this.nuevoFamiliar.UsuarioId = Number( sessionStorage.getItem( 'usuarioId' ) )
    //this.nuevoFamiliar.UsuarioId = 8
    this.nuevoFamiliar.Persona = this.nuevaPersona

    console.log( this.nuevoFamiliar );
    this.familiarService.postFamiliar( this.nuevoFamiliar ).subscribe( ( resp: any ) => {
      this.usuarioService.getUsuario( resp.usuarioId ).subscribe( ( resp: any ) => {
        console.log( resp );
        this.familiarService.guardarCorreoFamiliar( resp.correo );
        if ( resp.rolId === 2 ) {
          this.router.navigateByUrl( '/fm-dashboard' );
        }
        else {
          this.router.navigateByUrl( '/landing' );
        }
      } );
    } )
  }

  ngOnDestroy() {
    var html = document.getElementsByTagName( "html" )[0];
    html.classList.remove( "auth-layout" );
    var body = document.getElementsByTagName( "body" )[0];
    body.classList.remove( "bg-default" );
  }

}
