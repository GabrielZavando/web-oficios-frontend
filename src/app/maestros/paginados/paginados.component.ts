import { Component, OnInit} from '@angular/core';
import { Usuario, UserList } from '../../models/usuario.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-paginados',
  templateUrl: './paginados.component.html',
  styleUrls: ['./paginados.component.scss']
})
export class PaginadosComponent implements OnInit{
	public termino: string = ''
	public hayError: boolean = false
	public usuarios : Usuario[] = []
	public usuariosSugeridos: Usuario[] = []
	public total: number = 0

  constructor(
		private userService: UsuariosService
	) { }

	ngOnInit(): void{
		this.userService.getPaginatedUsers()
					.subscribe({
						next: (resp: UserList) => {
							this.usuarios = resp.usuarios
							this.total = resp.total
						}
					})
	}

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
