import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-paginados',
  templateUrl: './paginados.component.html',
  styleUrls: ['./paginados.component.scss']
})
export class PaginadosComponent implements OnInit {
	public usuarios : Usuario[] = []
	public total: number = 0

  constructor(
		private usuariosService: UsuariosService
	) { }

  ngOnInit(): void {
		this.usuariosService.getPaginatedUsers(0)
			.subscribe({
				next: (res) =>{
					this.usuarios = res.usuarios
					this.total = res.total
					console.log(res)
				},
				error: (err) => {
					console.log(err)
				},
				complete: () => console.info('complete')
			})
  }

}
