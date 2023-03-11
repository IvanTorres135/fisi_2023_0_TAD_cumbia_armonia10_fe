import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ReciboService {

    API_URI = 'localhost:3000';

    constructor(private http: HttpClient) {}
    
    getReciboFecha(){
      return this.http.get(`${this.API_URI}/ne-Emision/servicio-al-cliente/v1/Fecharecibo`);
    }

    getReciboGeneral(ano: string, mes: string){
        return this.http.get(`${this.API_URI}/ne-Emision/servicio-al-cliente/v1/deudas/${ano}/${mes}`);
    }

    getReciboAgua(ano: string, mes: string){
        return this.http.get(`${this.API_URI}/ne-Emision/servicio-al-cliente/v1/consumoagua/${ano}/${mes}`);
    }

    getReciboMulta(ano: string, mes: string){
        return this.http.get(`${this.API_URI}/ne-Multas/servicio-al-cliente/v1/multas/${ano}/${mes}`);
    }

    setGeneracionRecibo(inicio: string, fin: string){
      const data = { "inicio": inicio, "fin": fin };
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post(`${this.API_URI}/ne-Emision/servicio-al-cliente/v1/generaterecibo`, data, httpOptions);
    }

}