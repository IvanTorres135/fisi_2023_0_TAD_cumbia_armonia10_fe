import { Component } from '@angular/core';

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
