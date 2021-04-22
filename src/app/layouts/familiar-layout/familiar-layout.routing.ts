import { Routes } from '@angular/router';
import { FamiliarDashboardComponent } from '../../pages/familiar-dashboard/familiar-dashboard.component';
import { FormAncianoComponent } from '../../pages/form-anciano/form-anciano.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { ListarAncianoComponent } from 'src/app/pages/listar-anciano/listar-anciano.component';
import { ListarOfertasComponent } from 'src/app/pages/listar-ofertas/listar-ofertas.component';
import { RegistrarOfertaComponent } from '../../pages/registrar-oferta/registrar-oferta.component';
import { ListarEnfermerosComponent } from 'src/app/pages/listar-enfermeros/listar-enfermeros.component';

export const FamiliarLayoutRoutes: Routes = [
    { path: 'fm-dashboard', component: FamiliarDashboardComponent },
    { path: 'nuevo-adultomayor', component: FormAncianoComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'mis-adultos-mayores', component: ListarAncianoComponent },
    { path: 'listar-ofertas', component: ListarOfertasComponent },
    { path: 'nueva-oferta', component: RegistrarOfertaComponent },
    { path: 'postulantes', component: ListarEnfermerosComponent}
];