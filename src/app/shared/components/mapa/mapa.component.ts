import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
	position = {
    lat: 51.678418,
    lng: 7.809007
  }

  label = {
    color: 'red',
    text: 'Marcador',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
