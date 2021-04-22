import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { FamiliarLayoutComponent } from './layouts/familiar-layout/familiar-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { LandingComponent } from './pages/landing/landing.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { FormFamiliarComponent } from './pages/form-familiar/form-familiar.component';
import { SeleccionComponent } from './pages/seleccion/seleccion.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { FormEnfermeroComponent } from './pages/form-enfermero/form-enfermero.component';
import { EnfermeroDashboardComponent } from './pages/enfermero-dashboard/enfermero-dashboard.component';

registerLocaleData( localeEs );

@NgModule( {
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LandingComponent,
    RegistrarComponent,
    FormFamiliarComponent,
    SeleccionComponent,
    IniciarSesionComponent,
    FormEnfermeroComponent,
    EnfermeroDashboardComponent,
    FamiliarLayoutComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
} )
export class AppModule { }
