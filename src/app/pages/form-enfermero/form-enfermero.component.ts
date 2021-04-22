import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-enfermero',
  templateUrl: './form-enfermero.component.html',
  styleUrls: ['./form-enfermero.component.css']
})
export class FormEnfermeroComponent implements OnInit {
  anyo: Date;
  public isCollapsed: boolean;
  constructor() { }

  ngOnInit(): void {
    var html = document.getElementsByTagName( "html" )[0];
    html.classList.add( "auth-layout" );
    var body = document.getElementsByTagName( "body" )[0];
    body.classList.add( "bg-default" );
    this.isCollapsed = true;
    this.anyo = new Date();
  }

}
