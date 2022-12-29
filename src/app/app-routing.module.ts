import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { MapComponent } from './modules/copas/map.component';
import { CupdetailsComponent } from './modules/cupdetails/cupdetails.component';
import { EliminatoriasComponent } from './modules/cupdetails/eliminatorias/eliminatorias.component';
// import { EliminatoriasComponent } from './modules/cupdetails/eliminatorias/eliminatorias.component';
// import { EstadiosComponent } from './modules/cupdetails/estadios/estadios.component';
// import { JogosComponent } from './modules/cupdetails/jogos/jogos.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children:[{
    path: '',
    component:DashboardComponent
    },
    {
    path: 'cupdetails/:id',
    component:CupdetailsComponent
    },
    {
    path: 'copas',
    component:MapComponent,
    },
    {
    path: 'cupdetails/eliminatorias',
    component:EliminatoriasComponent,
    outlet: 'detalhe'
    // },
    // {
    // path: 'cupdetails/jogos',
    // component:JogosComponent,
    // outlet: 'detalhe'
    // },
    // {
    // path: 'cupdetails/estadios',
    // component:EstadiosComponent,
    // outlet: 'detalhe'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
