import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IconsService {

  constructor(private http: HttpClient) { }

  // Get all posts from the API
  getFontAwesome() {
    return this.http.get('assets/data/fontawesome.json')
       
  }
}
