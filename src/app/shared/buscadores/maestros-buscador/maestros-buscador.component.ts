import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-maestros-buscador',
  templateUrl: './maestros-buscador.component.html',
  styleUrls: ['./maestros-buscador.component.scss']
})
export class MaestrosBuscadorComponent implements OnInit {
	@Output() onEnter: EventEmitter<string> = new EventEmitter()
	@Output() onDebounce: EventEmitter<string> = new EventEmitter()

	debouncer: Subject<string> = new Subject()
	termino: string = '';

  constructor() { }

  ngOnInit(): void {
		this.debouncer
		.pipe(debounceTime(300))
		.subscribe({
			next: (valor) => {
				this.onDebounce.emit(valor)
			}
		})
  }

	buscar(){
		console.log('boton')
		this.onEnter.emit(this.termino)
	}

	teclaPresionada(){
		this.debouncer.next(this.termino)
	}

}
