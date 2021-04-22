import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/fm-dashboard', title: 'Publicaciones', icon: 'ni-tv-2 text-green', class: '' },
  { path: '/mis-adultos-mayores', title: 'Mis Adultos mayores', icon: 'fas fa-users text-green', class: '' },
  { path: '/fm-dashboard', title: 'Mi Perfil', icon: 'ni-single-02 text-green', class: '' },
];

export const ROUTES2: RouteInfo[] = [
  { path: '/fm-dashboard', title: 'Publicaciones', icon: '', class: '' },
  { path: '/mis-adultos-mayores', title: 'Mis Adultos mayores', icon: '', class: '' },
  { path: '/fm-dashboard', title: 'Mi Perfil', icon: '', class: '' },
  { path: '/nueva-oferta', title: 'Nueva Oferta de Cuidado', icon: '', class: '' },
  { path: '/nuevo-adultomayor', title: 'Registrar Adulto Mayor', icon: '', class: '' },
  { path:'/postulantes', title:'Postulantes', icon:'', class:''}
];

@Component( {
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
} )
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor( private router: Router ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter( menuItem => menuItem );
    this.router.events.subscribe( ( event ) => {
      this.isCollapsed = true;
    } );
  }
}
