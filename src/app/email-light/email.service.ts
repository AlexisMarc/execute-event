import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailServiceLight {

  constructor(private http: HttpClient) { }

  // Get all emails from the API
  getEmails() {
    return this.http.get('assets/data/email.json')
       
  }
}
