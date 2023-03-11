import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URI = 'localhost:3000';

  constructor(private http: HttpClient) {}

  getUserdata(dpto: string){
    return this.http.get(`${this.API_URI}/ne-User/servicio-al-cliente/v1/dpto/${dpto}`);
  }
}
