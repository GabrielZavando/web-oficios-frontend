import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Usuario } from '../../models/usuario.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.scss']
})
export class MaestroComponent implements OnInit {
	public usuario!: Usuario

  constructor(
		private activatedRoute: ActivatedRoute,
		private userService: UsuariosService
	) { }

  ngOnInit(): void {
		this.activatedRoute.params
			.pipe(
				switchMap(({uid}) => this.userService.getUserForId(uid))
			)
			.subscribe({
				next: (usuario) => {
					this.usuario = usuario
				},
				error: (err) => console.log(err),
				complete: () => console.log('Operación completada')
			})
	}

}
