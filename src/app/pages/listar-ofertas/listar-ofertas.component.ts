import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { OfertaService } from '../../services/oferta.service';
import { Oferta } from '../../models/Oferta';

@Component( {
  selector: 'app-listar-ofertas',
  templateUrl: './listar-ofertas.component.html',
  styleUrls: ['./listar-ofertas.component.css']
} )
export class ListarOfertasComponent implements OnInit, OnDestroy {
  usuarioCorreo: string;
  usuarioOfertas: any[];
  hora: string;
  horacambiada: string;
  h: Date;
  constructor( private ofertaService: OfertaService, private router: Router ) { }

  ngOnInit(): void {
    this.usuarioCorreo = sessionStorage.getItem( 'familiarCorreo' );
    this.usuarioOfertas = [];
    this.ofertaService.getOfertas( this.usuarioCorreo ).subscribe( ( resp: any[] ) => {
      resp.forEach( ( item: any ) => this.usuarioOfertas.push( item ) );
      this.usuarioOfertas.forEach(
        ( item: any ) => {
          item.fechaAtenciones[0].rangoHora.inicio = "December 17, 1995 " + item.fechaAtenciones[0].rangoHora.inicio;
          item.fechaAtenciones[0].rangoHora.fin = "December 17, 1995 " + item.fechaAtenciones[0].rangoHora.fin;
        }
      );
      console.log( this.usuarioOfertas );
    } );
  }

  ngOnDestroy(): void {
    this.usuarioOfertas = null;
  }

}
