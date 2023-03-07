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


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    EmitirComponent,
    SidenavComponent,
    LecturasComponent,
    NuevoReporteComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
