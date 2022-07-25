import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NewsletterService } from '../../../services/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent{

	public form: FormGroup = this.fb.group({
		nombre: ['', [
			Validators.required,
			Validators.minLength(3),
			Validators.maxLength(15)
		]],
		correo: ['', [
			Validators.required,
			Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
		]]
	})

  constructor(
		private fb: FormBuilder,
		private newsletterService: NewsletterService
	) { }

	suscribir(){
		this.newsletterService
					.addSuscriptor(this.form.value)
						.subscribe({
							next: (suscriptor) =>{
								Swal.fire({
									title: 'Gracias por suscribirte!',
									text: 'Estaremos en contacto',
									icon: 'success',
									customClass: {
										confirmButton: 'alert-btn',
										icon: 'alert-icon-error',
									}
								})
								this.form.reset()
							},
							error: (err) =>{
								Swal.fire({
									title: 'Error!',
									text: err.message,
									icon: 'error',
									customClass: {
										confirmButton: 'alert-btn',
										icon: 'alert-icon-error',
									}
								})
							},
							complete: () =>{
								console.log('Operación completada')
							}
						})
	}

	get nombreNoValido(){
		return this.form.get('nombre')?.invalid && this.form.get('nombre')?.touched
  }

	get correoNoValido(){
		return this.form.get('correo')?.invalid && this.form.get('correo')?.touched
  }

}
