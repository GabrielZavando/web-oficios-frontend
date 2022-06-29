import { Component, OnInit } from '@angular/core';
import { Impacto } from '../../models/impacto.model';
import { DataImpacto } from '../../../assets/data/impactos';
import { Motivacion } from '../../models/motivacion.model';
import { DataMotivaciones } from '../../../assets/data/motivaciones';
import { Equipo } from '../../models/equipo.model';
import { DataEquipo } from '../../../assets/data/equipo';

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
