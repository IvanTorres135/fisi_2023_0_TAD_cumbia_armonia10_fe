import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { EmitirComponent } from './emitir/emitir.component';
import { LecturasComponent } from './lecturas/lecturas.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { ReciboPropitarioComponent } from './recibo-propitario/recibo-propitario.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'',component:InicioComponent},
    {path:'emitir',component:EmitirComponent},
    {path:'lecturas',component:LecturasComponent},
    {path:'inicio',component:InicioComponent},
    {path:'visualizar',component:VisualizarComponent},
    {path:'recibo-propietario',component:ReciboPropitarioComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
