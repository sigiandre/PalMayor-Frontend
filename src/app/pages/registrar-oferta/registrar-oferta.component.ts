import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anciano } from '../../models/Anciano';
import { AncianoService } from '../../services/anciano.service';
import { NgForm } from '@angular/forms';
import { OfertaCreate } from '../../models/Oferta';
import { RangoHoraCreate, RangoHora } from '../../models/RangoHora';
import { FechaAtencionCreate } from '../../models/FechaAtencion';
import { RangohoraService } from '../../services/rangohora.service';
import { OfertaService } from '../../services/oferta.service';

@Component( {
  selector: 'app-registrar-oferta',
  templateUrl: './registrar-oferta.component.html',
  styleUrls: ['./registrar-oferta.component.css']
} )
export class RegistrarOfertaComponent implements OnInit {
  horas = [];
  minutos = [0, 15, 30, 45];
  ancianos: any[] = [];
  hrInicio: string;
  hrFin: string;
  prdInicio: string;
  prdFin: string;
  fInicio: any;
  fFin: any;
  nuevaRanghora: RangoHoraCreate = new RangoHoraCreate();
  nuevaFechaAtenciones: FechaAtencionCreate[] = [];
  nuevaOferta: OfertaCreate = new OfertaCreate();

  constructor( private ancianoService: AncianoService, private rangoHoraService: RangohoraService, private ofertaService: OfertaService, private router: Router ) {
    for ( let i = 1; i < 13; i++ ) {
      this.horas.push( i );
    }
  }

  ngOnInit(): void {
    this.ancianoService.getAncianosFamiliar( sessionStorage.getItem( 'familiarCorreo' ) ).subscribe(
      ( data: any ) => data.forEach(
        ( item: any ) => this.ancianos.push( { id: Number( item.id ), nombre: `${ item.persona.nombre } ${ item.persona.apellidos }` } )
      )
    );
  }



  registrarOferta( form: NgForm ) {
    //this.router.navigateByUrl( '/fm-dashboard' );
    console.log( this.ancianos );
    console.log( form );

    const diffHoras = this.diferenciaHoras();
    if ( diffHoras <= 0 ) {
      console.log( 'error difhoras' );
      return;
    }

    const fechaInicio = new Date( this.fInicio.year, this.fInicio.month, this.fInicio.day );
    const fechaFin = new Date( this.fFin.year, this.fFin.month, this.fFin.day );
    const diffDias = Math.round( ( fechaFin.getTime() - fechaInicio.getTime() ) / ( 1000 * 3600 * 24 ) );
    if ( diffDias <= 0 ) {
      console.log( 'error difdias' );
      return;
    }


    this.nuevaRanghora.Inicio = `${ this.hrInicio }:00`;
    this.nuevaRanghora.Fin = `${ this.hrFin }:00`;

    this.rangoHoraService.postRangoHora( this.nuevaRanghora ).subscribe( ( data: any ) => {
      this.completarOferta( data.id, fechaInicio, diffDias );
      this.ofertaService.postOferta( this.nuevaOferta ).subscribe( ( data: any ) => console.log( data ) );
    } );
  }

  completarOferta( idrangohoras: Number, desde: Date, dias: Number ) {
    this.nuevaOferta.AncianoId = Number( this.nuevaOferta.AncianoId );
    for ( var i = 0; i <= dias; i++ ) {
      let temp = new FechaAtencionCreate();
      temp.Fecha = new Date( desde.getTime() + ( 1000 * 3600 * 24 ) );
      temp.Fecha.setDate( desde.getDate() + i );
      temp.RangoHoraId = idrangohoras;
      this.nuevaFechaAtenciones.push( temp );
    }
    this.nuevaOferta.FechaAtenciones = this.nuevaFechaAtenciones;
    if ( this.nuevaOferta.Descripcion != null && this.nuevaOferta.Descripcion.length === 0 ) this.nuevaOferta.Descripcion = null;
  }

  diferenciaHoras(): Number {
    if ( this.prdInicio.toLowerCase() === 'pm' ) {
      Number( this.hrInicio ) != 12 ? this.hrInicio = ( Number( this.hrInicio ) + 12 ).toString() : this.hrInicio = this.hrInicio;
    }


    if ( this.prdFin.toLowerCase() === 'pm' ) {
      Number( this.hrFin ) != 12 ? this.hrFin = ( Number( this.hrFin ) + 12 ).toString() : this.hrFin = this.hrFin;
    }

    return Number( this.hrFin ) - Number( this.hrInicio );
  }
}
