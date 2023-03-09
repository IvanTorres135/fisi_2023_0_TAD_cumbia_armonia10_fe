import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReciboService } from '../../../../services/recibo.service';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-nuevo-reporte',
  templateUrl: './nuevo-reporte.component.html',
  styleUrls: ['./nuevo-reporte.component.css']
})

export class NuevoReporteComponent {

  isDisabled = false;
  loading=false;
  loading1=true;
  fecharecibo: any = {};
  datarecibogenera: any = [];
  datareciboagua: any = [];
  datarecibomulta : any = [];

  constructor(private reciboService: ReciboService) { 
    
    this.reciboService.getReciboFecha().subscribe(
      res => {
        //console.log(res);
        this.fecharecibo = res;
        this.reciboService.getReciboGeneral(this.fecharecibo.ano, this.fecharecibo.mes).subscribe(
          res => {
            //console.log(res);
            this.datarecibogenera = res;
          },
          err => console.log(err)
        );
        this.reciboService.getReciboAgua(this.fecharecibo.ano, this.fecharecibo.mes).subscribe(
          res => {
            //console.log(res);
            this.datareciboagua = res;
          },
          err => console.log(err)
        );
        this.reciboService.getReciboMulta(this.fecharecibo.ano, this.fecharecibo.mes).subscribe(
          res => {
            //console.log(res);
            this.datarecibomulta = res;
          },
          err => console.log(err)
        );
      },
      err => console.log(err)
    );
    
  }
  

  //sumar montos de datarecibogenera
  sumarMonto(){
    let suma = 0;
    for(let i = 0; i < this.datarecibogenera.length; i++){
      suma += this.datarecibogenera[i].monto;
    }
    suma = suma / 64;
    //suma debe tener 2 decimales numericos
    var suma1 = suma.toFixed(2);
    return suma1;
  }

  //sumar registros de datareciboagua
  sumarRegistros(){
    return this.datareciboagua.length;
  }

  sumarRegistroMulta(){
    return this.datarecibomulta.length;
  }
  
  generaciondeRecibo(inicio: string, fin: string){

    //NO EJECUTAR SI INICIO O FIN ESTA VACIO
    if(inicio == '' || fin == ''){

      alert('1 o mas dampos de fecha estan vacios');
      return;
    }else{
      //desabilitar boton typescript
      this.loading = true;
      this.loading1= false;
      this.isDisabled = true;
      //alert('EL RECIBO SE ESTA EMITIENDO, POR FAVOR ESPERE...');
      var inicio1 = inicio.split('/');
      var fin1 = fin.split('/');
      inicio = inicio1[0];
      fin = fin1[0];

      //console.log(inicio+' '+fin);
      this.reciboService.setGeneracionRecibo(inicio, fin).subscribe(
        res => {
          //console.log(res);
          //cerrar este componente
          this.loading = false;
          alert('EL RECIBO HA SIDO EMITIDO CON EXITO');
        },
        err => console.log(err)
      );
    }
  }


  displayedColumns = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Mantenimiento de ascensores', cost: 200},
    {item: 'Luz de bomba de agua', cost: 300},
    {item: 'Mantenimiento de Luces de Emergencia', cost: 150},
    {item: 'Mantenimiento desague del edificio', cost: 100},
    {item: 'Servicio de limpieza y vigilancia de área común', cost: 700},
    {item: 'Servicio de seguridad y limpieza de la torre', cost: 850},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
