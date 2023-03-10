import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';



//Componentes
import { LoginComponent } from './components/login/login.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
//import { NuevoReporteComponent} from './components/dashboard/mensaje/nuevo-reporte/nuevo-reporte.component';
import { MatMenuModule } from '@angular/material/menu';

import { ReciboService } from './services/recibo.service';
import { UsuarioService } from './services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [
    ReciboService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
