import { Component, OnInit } from '@angular/core';
import { UsuarioCreate } from '../../models/Usuario';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component( {
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
} )
export class RegistrarComponent implements OnInit {
  anyo: Date;
  public isCollapsed: boolean;
  listaCorreos = [];
  nuevoUsuario: UsuarioCreate = new UsuarioCreate();
  acepta: boolean;
  modalCorreoRepetido: boolean;


  constructor( private usuarioService: UsuarioService, private router: Router, private modalService: NgbModal ) { }

  ngOnInit(): void {
    var html = document.getElementsByTagName( "html" )[0];
    html.classList.add( "auth-layout" );
    var body = document.getElementsByTagName( "body" )[0];
    body.classList.add( "bg-default" );
    this.isCollapsed = true;
    this.anyo = new Date();
    this.acepta = false;
    this.getUsuarioCorreos();

  }

  registrarUsuario( form: NgForm, modal ) {
    if ( !form.valid ) {
      return;
    }

    if ( this.esCorreoRepetido( String( form.controls.correo.value ) ) ) {
      this.modalService.open( modal );
      return;
    }

    this.nuevoUsuario.RolId = 4;
    this.usuarioService.postUsuario( this.nuevoUsuario ).subscribe( ( resp: any ) => {
      console.log( resp );
      this.usuarioService.guardarId( resp.id )
      console.log( sessionStorage.getItem( 'usuarioId' ) );
      this.router.navigateByUrl( '/registrar/seleccion' );
    } );

  }

  getUsuarioCorreos() {
    this.usuarioService.getCorreos().subscribe( resp => { this.listaCorreos = resp; console.log( this.listaCorreos ) } );
  }

  esCorreoRepetido( correo: string ): boolean {
    for ( var item of this.listaCorreos ) {
      if ( correo === item ) return true;
    }
  }
}
