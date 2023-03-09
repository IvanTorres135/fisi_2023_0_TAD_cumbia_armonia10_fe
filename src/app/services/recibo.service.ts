import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ReciboService {

    API_URI = 'http://localhost:3000/api';

    constructor(private http: HttpClient) {}

    getReciboFecha(){
      return this.http.get(`${this.API_URI}/fecharecibo`);
    }

    getReciboGeneral(ano: string, mes: string){
        return this.http.get(`${this.API_URI}/deudas/${ano}/${mes}`);
    }

    getReciboAgua(ano: string, mes: string){
        return this.http.get(`${this.API_URI}/consumoagua/${ano}/${mes}`);
    }

    getReciboMulta(ano: string, mes: string){
        return this.http.get(`${this.API_URI}/multas/${ano}/${mes}`);
    }

    setGeneracionRecibo(inicio: string, fin: string){
      const data = { "inicio": inicio, "fin": fin };
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post(`${this.API_URI}/generaterecibo`, data, httpOptions);
    }

}