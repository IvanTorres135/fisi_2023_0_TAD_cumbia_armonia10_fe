import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { EmitirComponent } from './emitir/emitir.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LecturasComponent } from './lecturas/lecturas.component';
import { NuevoReporteComponent } from './mensaje/nuevo-reporte/nuevo-reporte.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { ReciboPropitarioComponent } from './recibo-propitario/recibo-propitario.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    EmitirComponent,
    SidenavComponent,
    LecturasComponent,
    NuevoReporteComponent,
    VisualizarComponent,
    ReciboPropitarioComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
