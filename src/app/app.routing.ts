import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { FormFamiliarComponent } from './pages/form-familiar/form-familiar.component';
import { SeleccionComponent } from './pages/seleccion/seleccion.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { FormEnfermeroComponent } from './pages/form-enfermero/form-enfermero.component';
import { FormAncianoComponent } from './pages/form-anciano/form-anciano.component';
import { FamiliarDashboardComponent } from './pages/familiar-dashboard/familiar-dashboard.component';
import { FamiliarLayoutComponent } from './layouts/familiar-layout/familiar-layout.component';
import { ListarAncianoComponent } from './pages/listar-anciano/listar-anciano.component';

const routes: Routes = [

  {
    path: 'log-in',
    component: IniciarSesionComponent
  },
  {
    path: 'registrar/seleccion',
    component: SeleccionComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  },
  {
    path: 'registrarfamiliar',
    component: FormFamiliarComponent
  },
  {
    path: 'registrarenfermero',
    component: FormEnfermeroComponent
  },  
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FamiliarLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/familiar-layout/familiar-layout.module#FamiliarLayoutModule'
      }
    ]
  },
  /*{
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  },*/
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'landing'
  }
];

@NgModule( {
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot( routes, {
      useHash: true
    } )
  ],
  exports: [
  ],
} )
export class AppRoutingModule { }
