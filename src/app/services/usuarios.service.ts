import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserList, Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';

const base_url = environment.base_url

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
}
