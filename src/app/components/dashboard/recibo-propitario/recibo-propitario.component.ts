import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { MatTableDataSource } from '@angular/material/table';

export interface Transaction {
  item: number;
  descripcion: string;
  valor: string;
}

@Component({
  selector: 'app-recibo-propitario',
  templateUrl: './recibo-propitario.component.html',
  styleUrls: ['./recibo-propitario.component.css']
})
export class ReciboPropitarioComponent {

  datausuario: any = [];
  transactions: any = [];

  constructor (private usuarioService: UsuarioService) {
    this.usuarioService.getUserdata('204').subscribe(
      res => {
        this.datausuario = res;
        this.transactions = [
          {item: 1, descripcion: 'nombres', valor: this.datausuario[0].nombres},
          {item: 2, descripcion: 'apellidos', valor: this.datausuario[0].apellidos},
          {item: 3, descripcion: 'rol', valor: this.datausuario[0].user_role},
          {item: 4, descripcion: 'telefono', valor: this.datausuario[0].telefono},
          {item: 5, descripcion: 'correo', valor: this.datausuario[0].correo},
          {item: 6, descripcion: 'departamento', valor: this.datausuario[0].departamento},
          {item: 7, descripcion: 'tipo_doc', valor: this.datausuario[0].tipo_doc},
          {item: 8, descripcion: 'documento', valor: this.datausuario[0].documento},
          {item: 9, descripcion: 'fecha registro', valor: this.datausuario[0].fec_reg}
        ];
        //console.log(this.datausuario);
        //console.log(this.transactions);
      },
      err => console.log(err)
    );
  }
  displayedColumns = ['item', 'descripcion','valor'];
}
