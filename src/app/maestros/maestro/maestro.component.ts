import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Usuario } from '../../models/usuario.model';
import { UsuariosService } from '../../services/usuarios.service';

interface Item{
	imageSrc: string;
	imageAlt: string;
}

@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.scss']
})
export class MaestroComponent implements OnInit {
	public direccion?: string = ''
	public usuario!: Usuario
	public cargado: boolean = true
	public linkWhatsapp: string = ''
	public linkShareFace: string = ''
	public linkShareTwitter: string = ''
	public galeria: string[] = []


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
					this.createSocialLink(usuario)
					this.galeria = usuario.galeria
				},
				error: (err) => console.log(err),
				complete: () => console.log('Operación completada')
			})
	}

	createLinkWhatsapp(user: Usuario){
		let fono = user.whatsapp?.replace('+', '').split(" ").join("")

		this.linkWhatsapp = "https://api.whatsapp.com/send?phone=" + fono
	}

	createSocialLink(user: Usuario): void{
		let uid = user.uid
		this.linkShareFace = "https://www.facebook.com/sharer/sharer.php?u=https%3A//plataformaoficios.cl/maestros/" + uid
		this.linkShareTwitter = "https://twitter.com/intent/tweet?url=https://plataformaoficios.cl/maestros/" + uid
	}

}

