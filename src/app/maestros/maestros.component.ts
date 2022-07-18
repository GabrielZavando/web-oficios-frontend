import { Component } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-maestros',
  templateUrl: './maestros.component.html',
  styleUrls: ['./maestros.component.scss']
})
export class MaestrosComponent{
	termino: string = ''
	hayError: boolean = false
	usuarios: Usuario[] = []
	usuariosSugeridos: Usuario[] = []


  constructor(
		private userService: UsuariosService
	) { }

	buscar(termino: string){
		this.hayError = false
		this.termino = termino

		this.userService.getUserForTermino(termino)
					.subscribe({
						next: (respuesta) => console.log(respuesta)
					})
	}

	sugerencias(termino: string){
		this.hayError = false

		this.userService.getUserForTermino(termino)
					.subscribe({
						next: (respuesta) => console.log(respuesta)
					})
	}

}
