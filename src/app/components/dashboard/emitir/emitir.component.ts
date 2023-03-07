import { Component,OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Recibos } from 'src/app/interfaces/recibos';
import {NuevoReporteComponent} from 'src/app/components/dashboard/mensaje/nuevo-reporte/nuevo-reporte.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-emitir',
  templateUrl: './emitir.component.html',
  styleUrls: ['./emitir.component.css']
})
export class EmitirComponent implements OnInit{

  ListRecibos: Recibos[] = [
    {id: 1, recibo: 'RECIBO-01/23',ano:2023, mes:'enero',monto:9260},
    {id: 2, recibo: 'RECIBO-02/23',ano:2023, mes:'febrero',monto:10243},
    {id: 3, recibo: 'RECIBO-03/23',ano:2023, mes:'marzo',monto:9731},
  ];

  displayedColumns: string[] = ['id','recibo','ano','mes','monto','acciones'];
  dataSource = new MatTableDataSource(this.ListRecibos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
   constructor(public dialog: MatDialog){
  }

  openDialog(){
    this.dialog.open(NuevoReporteComponent,{
      width:'650px',
    })
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}