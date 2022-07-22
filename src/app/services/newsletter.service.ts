import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Newsletter } from '../models/newsletter.model';

@Injectable({
	providedIn: 'root'
})
export class NewsletterService {

	constructor(
		private http: HttpClient
	) { }


	addSuscriptor(suscriptor: Newsletter):Observable<Newsletter>{
		return this.http.post<Newsletter>('/sendmail.php', suscriptor);
	}
}
