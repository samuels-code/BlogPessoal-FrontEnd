import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://blogpessoalthiago.herokuapp.com/usuarios/cadastrar', usuario)
  }
}
