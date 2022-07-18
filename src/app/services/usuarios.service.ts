import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserList, Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';

const base_url = environment.base_url
// 'http://localhost:3000/api/v1'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
		private http: HttpClient
	) { }

	postUser(forData: any){} // Crear interfaz para el regsitro de usuarios

	getPaginatedUsers(desde: number = 0){
		return this.http.get<UserList>(`${base_url}/user/listar?desde${desde}`)
	}

	getUserForId(uid: string):Observable<Usuario>{
		return this.http.get<Usuario>(`${base_url}/buscar/usuarios/${uid}`)
	}

	getUserDestacados():Observable<Usuario[]>{
		return this.http.get<Usuario[]>(`${base_url}/user/destacados`)
	}

	getUserForTermino(termino: string, desde: string = '0'):Observable<UserList>{
		const params = new HttpParams()
							.set('desde', desde)
		return this.http.get<UserList>(`${base_url}/user/buscar/${termino}`, {params: params})
	}
}
