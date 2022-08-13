import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
	public ancho: string = '100%'
	public alto: string = '200px'

	position = {
    lat: -23.66213,
    lng: -70.40121
  }

  constructor() {

	}

  ngOnInit(): void {
		this.onBreakPoint()
	}

	onBreakPoint(){
		// cuando el ancho de la pantalla (window.innerWidth) sea >= a el breakpoint en que necesite hacer un cambio cambiamos los valores de ancho y/o alto.
		if (window.innerWidth >= 1440) {
      this.alto = "600px"
    }else if(window.innerWidth >= 1024) {
			this.alto = "500px"
		}else if(window.innerWidth >= 768){
			this.alto = "400px"
		}
	}

}
