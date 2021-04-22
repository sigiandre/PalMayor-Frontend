import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaCreate } from 'src/app/models/Persona';
import { AncianoCreate } from 'src/app/models/Anciano';
import { Familiar, FamiliarCreate } from 'src/app/models/Familiar';
import { FamiliarService } from 'src/app/services/familiar.service';
import { AncianoService } from 'src/app/services/anciano.service';
//import { error } from 'console';
import { NgForm } from '@angular/forms';
import { AbvcService } from 'src/app/services/abvc.service';
import { AncianoABVCCreate } from 'src/app/models/AncianoABVC';

@Component( {
  selector: 'app-form-anciano',
  templateUrl: './form-anciano.component.html',
  styleUrls: ['./form-anciano.component.css']
} )
export class FormAncianoComponent implements OnInit {

  nuevaPersona:  PersonaCreate  = new PersonaCreate();
  nuevoAnciano:  AncianoCreate  = new AncianoCreate();  
  correo: string = sessionStorage.getItem('familiarCorreo');
  sexos: any[];
  fechaNacimientoPersona: any;
  fotoUrl: string;
  familiarId: Number;
  abvcs: any[]; //para el get
  seleccionAbvc: any[]; 

  constructor(private familiarService: FamiliarService, private ancianoService: AncianoService, private abvcService: AbvcService,private router: Router ) { }
  
  ngOnInit(): void {  
    this.sexos = [{ key: 'F', value: 'Femenino'},{ key: 'M', value: 'Masculino'}, { key: 'T', value: 'Trapito'}];
    this.fotoUrl = "https://static.wixstatic.com/media/d62b8c_18b7d125e588413d803742fb7c408488~mv2.jpg/v1/fit/w_700,h_400,al_c,q_80/file.jpg"
    this.seleccionAbvc = [];    
    this.nuevoAnciano.AncianoABVCs=[];
    for(var i = 0; i<8; i++){
      this.seleccionAbvc.push({abvcId:null});
    }
    
    this.familiarService.getFamiliar(this.correo).subscribe( (resp: any)=>{
      console.log(resp);
      this.familiarId = resp.id     
    })

    this.abvcService.getABVCs().subscribe((resp) => {
      this.abvcs = resp
      console.log(resp);
    });
   
  }

  registrarAnciano( form: NgForm ){
    if( !form.valid ){
      return;
    }
    this.nuevaPersona.FechaNacimiento = new Date(this.fechaNacimientoPersona.year, 
      this.fechaNacimientoPersona.month, this.fechaNacimientoPersona.day);
    this.nuevaPersona.Foto = this.fotoUrl;

    this.nuevoAnciano.Persona = this.nuevaPersona;
    this.nuevoAnciano.FamiliarId = this.familiarId;
    console.log(this.seleccionAbvc);
    for(var i of this.seleccionAbvc ){
      console.log(i);
      if(i.abvcId != null) this.nuevoAnciano.AncianoABVCs.push(i);
    }
    console.log(form);
    console.log(this.nuevoAnciano);

    this.ancianoService.postAnciano(this.nuevoAnciano).subscribe( data =>{
      console.log(data);
    });
  }

  
  setEspeciales(e:any, id:Number){
    if(e.target.checked){
      this.nuevoAnciano.AncianoABVCs.push({abvcId:id});      
    }
    else{
      this.nuevoAnciano.AncianoABVCs=this.nuevoAnciano.AncianoABVCs.filter(item=>item.abvcId!=id);
    }
  }

}
