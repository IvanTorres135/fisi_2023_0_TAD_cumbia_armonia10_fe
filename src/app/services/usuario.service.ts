import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getUserdata(dpto: string){
    return this.http.get(`${this.API_URI}/datauser/${dpto}`);
  }
}
