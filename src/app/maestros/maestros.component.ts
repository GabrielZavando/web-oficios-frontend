import { Component, OnInit } from '@angular/core';
import { UserList, Usuario } from '../models/usuario.model';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-maestros',
  templateUrl: './maestros.component.html',
  styleUrls: ['./maestros.component.scss']
})
export class MaestrosComponent implements OnInit{
	public termino: string = ''
	public hayError: boolean = false
	public usuarios : Usuario[] = []
	public usuariosSugeridos: Usuario[] = []
	public DESTACADOS: Usuario[] = []
	public mostrarSugerencias: boolean = false
	public mostrarSeccionMaestros: boolean = true
	public total: number = 0
	public totalPag: number = 0
	public desde: number = 0
	public btnNextActivo: boolean = true
	public btnPrevActivo: boolean = false

  constructor(
		private userService: UsuariosService
	) { }

	ngOnInit(): void {
		this.usuariosPaginados()
		this.usuariosDestacados()
	}


	usuariosPaginados(desde: number = 0): void{
		this.desde = desde

		if(desde > 0){
			this.btnPrevActivo = true
		}else if(desde <= 0){
			this.btnPrevActivo = false
		}

		this.userService.getPaginatedUsers(desde)
						.subscribe({
							next: (resp: UserList) => {
								this.usuarios = resp.usuarios
								this.total = resp.total
								this.totalPag = Math.ceil(this.total / 6)
								let hasta = (Math.floor(this.total / 6) * 6)
								if(desde === hasta){
									this.btnNextActivo = false
								}else if(desde < hasta){
									this.btnNextActivo = true
								}
							}
						})
	}

	usuariosDestacados(): void{
		this.userService.getUserDestacados()
		.subscribe({
			next: (destacados: Usuario[]) => {
				this.DESTACADOS = destacados
			}
		})
	}

	buscar(termino: string = '', desde: number = 0){
		this.mostrarSugerencias = false
		this.hayError = false
		this.termino = termino
		this.desde = desde
		this.mostrarSeccionMaestros = false

		if(desde > 0){
			this.btnPrevActivo = true
		}else if(desde <= 0){
			this.btnPrevActivo = false
		}

		this.userService.getUserForTermino(termino, desde)
					.subscribe({
						next: (res: UserList) => {
							this.usuarios = res.usuarios
							this.total = res.total
							this.totalPag = Math.ceil(this.total / 6)
							let hasta = (Math.floor(this.total / 6) * 6)
							if(desde === hasta){
								this.btnNextActivo = false
							}else if(desde < hasta){
								this.btnNextActivo = true
							}

						},
						error: (err) => {
							this.hayError = true
							this.usuarios = []
						},
						complete: () => console.info('complete')
					})
	}

	sugerencias(termino: string){
		this.hayError = false
		this.termino = termino
		this.mostrarSugerencias = true
		this.mostrarSeccionMaestros = false

		this.userService.getUserForTermino(termino)
					.subscribe({
						next: (resp: UserList) => {
							this.usuariosSugeridos = resp.usuarios.splice(0,5)
							console.log(this.usuariosSugeridos)
						},
						error: (err) => {this.usuariosSugeridos = []}
					})
	}

	buscarSugerido(termino: string){
		this.buscar(termino)
		this.mostrarSugerencias = false
	}

	// Paginacion

	next(termino: string = '', sig: number){
		let desde = this.desde + sig

		if(termino === ''){
			this.usuariosPaginados(desde)
		}else{
			this.buscar(termino, desde)
		}
	}


	prev(termino: string = '', prev: number){
    let desde = this.desde - prev

    if(termino === ''){
      this.usuariosPaginados(desde)
    }else{
      this.buscar(termino, desde)
    }
  }

}
