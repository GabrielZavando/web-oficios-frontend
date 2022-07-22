import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent{
	// public suscriptor: Newsletter
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
	) {	 }

	suscribir(){
		console.log(this.form.value)

		this.newsletterService
					.addSuscriptor(this.form.value)
						.subscribe({
							next: (suscriptor) =>{
								console.log(suscriptor);
							},
							error: (err) =>{
								console.log(err);
							},
							complete: () =>{
								console.log('Operacion completada');
							}
						})
	}

}
