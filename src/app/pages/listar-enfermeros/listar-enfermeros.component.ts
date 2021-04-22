import { Component, OnInit } from '@angular/core';
import { EnfermeroService } from 'src/app/services/enfermero.service';

@Component({
  selector: 'app-listar-enfermeros',
  templateUrl: './listar-enfermeros.component.html',
  styleUrls: ['./listar-enfermeros.component.css']
})
export class ListarEnfermerosComponent implements OnInit {

  postulantes: any[];
  idOferta: Number;
  idEnfermero: Number;

  constructor(private enfOfertaService: EnfermeroService, ) { }

  ngOnInit(): void {
    this.idOferta = 1;
    this.enfOfertaService.getEnfermerosByOferta(this.idOferta).subscribe((resp: any)=>{
      console.log(resp);
      this.postulantes = resp;      
     
    })
    
  }
  contratarEnfermero(idEnf: Number){
    this.idEnfermero = idEnf;
  }



}
