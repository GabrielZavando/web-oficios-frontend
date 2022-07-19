import { Component, Input } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-paginados',
  templateUrl: './paginados.component.html',
  styleUrls: ['./paginados.component.scss']
})
export class PaginadosComponent{
	@Input() usuarios : Usuario[] = []
	@Input() total: number = 0

  constructor() { }

}
