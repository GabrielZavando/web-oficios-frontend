import { Component, OnInit } from '@angular/core';
import { DataEquipo } from '../../../assets/data/equipo';
import { DataImpacto } from '../../../assets/data/impactos';
import { DataMotivaciones } from '../../../assets/data/motivaciones';
import { Equipo } from '../../models/equipo.model';
import { Impacto } from '../../models/impacto.model';
import { Motivacion } from '../../models/motivacion.model';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {
	public impactos: Impacto[] = DataImpacto
	public motivaciones: Motivacion[] = DataMotivaciones
	public equipo: Equipo[] = DataEquipo

  constructor() { }

  ngOnInit(): void {
  }

}
