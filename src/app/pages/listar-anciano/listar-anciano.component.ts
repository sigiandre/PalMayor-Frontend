import { Component, OnInit } from '@angular/core';
import { Anciano } from 'src/app/models/Anciano';
import { AncianoService } from 'src/app/services/anciano.service';

@Component({
  selector: 'app-listar-anciano',
  templateUrl: './listar-anciano.component.html',
  styleUrls: ['./listar-anciano.component.css']
})
export class ListarAncianoComponent implements OnInit {

  nuevosAncianos: any[];
  correo: string = sessionStorage.getItem('familiarCorreo');

  constructor(private ancianoService: AncianoService) { }

  ngOnInit(): void {
    this.ancianoService.getAncianosFamiliar(this.correo).subscribe((resp :any)=>{
      this.nuevosAncianos = resp
      console.log(resp);
    })
  }

}
