import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FamiliarLayoutRoutes } from './familiar-layout.routing';
import { FamiliarDashboardComponent } from '../../pages/familiar-dashboard/familiar-dashboard.component';
import { FormAncianoComponent } from '../../pages/form-anciano/form-anciano.component';
import { ListarAncianoComponent } from 'src/app/pages/listar-anciano/listar-anciano.component';
import { ListarOfertasComponent } from 'src/app/pages/listar-ofertas/listar-ofertas.component';
import { RegistrarOfertaComponent } from '../../pages/registrar-oferta/registrar-oferta.component';
import { ListarEnfermerosComponent } from 'src/app/pages/listar-enfermeros/listar-enfermeros.component';



@NgModule( {
  declarations: [
    FamiliarDashboardComponent,
    FormAncianoComponent,
    ListarAncianoComponent,
    ListarOfertasComponent,
    FormAncianoComponent,
    RegistrarOfertaComponent,
    ListarEnfermerosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( FamiliarLayoutRoutes ),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule
  ]
} )
export class FamiliarLayoutModule { }
