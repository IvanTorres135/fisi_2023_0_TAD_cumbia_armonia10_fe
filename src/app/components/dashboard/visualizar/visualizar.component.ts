import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-visualizar',
  template: `
  <div class="button-container">
      <button *ngFor="let button of buttons" class="button">{{ button.text }}</button>
    </div>
  `,
  styles: [
    ` .button-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    
    .button {
      width: calc(25% - 10px);
      height: calc(33.33% - 10px);
      margin: 5px;
      background-color: #55a6b1;
      color: #fff;
      border: none;
      border-radius: 5px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
    } 
    `,
  ],
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {
  
  public buttons = [
    { text: 'Departamento 101' },
    { text: 'Departamento 102' },
    { text: 'Departamento 103' },
    { text: 'Departamento 104' },
    { text: 'Departamento 201' },
    { text: 'Departamento 202' },
    { text: 'Departamento 203' },
    { text: 'Departamento 204' },
    { text: 'Departamento 301' },
    { text: 'Departamento 302' },
    { text: 'Departamento 303' },
    { text: 'Departamento 304' },
    { text: 'Departamento 401' },
    { text: 'Departamento 402' },
    { text: 'Departamento 403' },
    { text: 'Departamento 404' },
    { text: 'Departamento 501' },
    { text: 'Departamento 502' },
    { text: 'Departamento 503' },
    { text: 'Departamento 504' },
    { text: 'Departamento 601' },
    { text: 'Departamento 602' },
    { text: 'Departamento 603' },
    { text: 'Departamento 604' },
  ];
  
  constructor(private router:Router){

  }

  ngOnInit(): void {
    
  }

  ver_recibo(){
    this.router.navigate(['dashboard/recibo-propietario']);
  }
}
