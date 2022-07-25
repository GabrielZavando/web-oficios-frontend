import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Newsletter } from '../models/newsletter.model';

@Injectable({
	providedIn: 'root'
})
export class NewsletterService {

	constructor(
		private http: HttpClient
	) { }


	addSuscriptor(suscriptor: Newsletter){
		// let headers = new HttpHeaders({
		// 	'Content-Type': 'application/json',
		// 	'Accept': 'application/json'
		// }, resposeType: text);
		return this.http.post('/sendmail.php', suscriptor, {responseType: 'text'})
	}
}
