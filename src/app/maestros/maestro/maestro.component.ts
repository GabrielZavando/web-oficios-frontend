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
	public cargado: boolean = true
	public linkWhatsapp: string = ''

	// https://wa.me/+59986009490?text=¡Estoy+interesado!

  constructor(
		private activatedRoute: ActivatedRoute,
		private userService: UsuariosService
		) {	}


  ngOnInit(): void {
		this.activatedRoute.params
			.pipe(
				switchMap(({uid}) => this.userService.getUserForId(uid))
			)
			.subscribe({
				next: (usuario: Usuario) => {
					this.usuario = usuario
					this.createLinkWhatsapp(usuario)
					// let fono = this.usuario.whatsapp?.replace('+', '').split(" ").join("")

				},
				error: (err) => console.log(err),
				complete: () => console.log('Operación completada')
			})
	}

	createLinkWhatsapp(user: Usuario){
		let fono = user.whatsapp?.replace('+', '').split(" ").join("")

		this.linkWhatsapp = "https://api.whatsapp.com/send?phone=" + fono
	}

}

// https://api.whatsapp.com/send?phone=56986009490
