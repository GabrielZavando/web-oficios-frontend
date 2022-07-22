import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserList, Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';

const base_url = "https://apirest-weboficios.herokuapp.com/api/v1"
// En local
// 'http://localhost:3000/api/v1'

// En produccion
// https://apirest-weboficios.herokuapp.com/api/v1

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
	public cargado: boolean = false

  constructor(
		private http: HttpClient
	) { }

	postUser(forData: any){} // Crear interfaz para el regsitro de usuarios

	getPaginatedUsers(desde: number = 0){
		return this.http.get<UserList>(`${base_url}/user/listar?desde=${desde}`)
	}

	getUserForId(uid: string):Observable<Usuario>{
		return this.http.get<Usuario>(`${base_url}/buscar/usuarios/${uid}`)
	}

	getUserDestacados():Observable<Usuario[]>{
		return this.http.get<Usuario[]>(`${base_url}/user/destacados`)
	}

	getUserForTermino(termino: string, desde: number = 0):Observable<UserList>{
		return this.http.get<UserList>(`${base_url}/user/buscar/${termino}?desde=${desde}`)
	}
}
