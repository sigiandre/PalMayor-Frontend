import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
} )
export class LandingComponent implements OnInit {
  anyo: Date;
  public isCollapsed: boolean;
  constructor() { }

  ngOnInit() {
    var html = document.getElementsByTagName( "html" )[0];
    html.classList.add( "auth-layout" );
    var body = document.getElementsByTagName( "body" )[0];
    body.classList.add( "bg-default" );
    this.isCollapsed = true;
    this.anyo = new Date();
  }

}
