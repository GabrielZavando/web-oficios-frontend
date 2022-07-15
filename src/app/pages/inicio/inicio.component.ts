import { Component, OnInit } from '@angular/core';
import { SLIDER_BANNER_DATA } from '../../../assets/data/slider-inicio';
import { SliderBanner } from '../../models/slider.banner.model';
import { Usuario } from '../../models/usuario.model';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public DATA: SliderBanner[] = SLIDER_BANNER_DATA
	public DESTACADOS: Usuario[] = []

  constructor(
		private userService: UsuariosService
	) { }

  ngOnInit(): void {
		this.userService.getUserDestacados()
					.subscribe({
						next: (destacados: Usuario[]) => {
							this.DESTACADOS = destacados
							console.log(this.DESTACADOS);

						}
					})
		console.log(this.DESTACADOS)
	}

}
