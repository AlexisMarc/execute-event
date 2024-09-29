import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GalleryService {

  constructor(private http: HttpClient) { }

  // Get social feed posts
  getFeed() {
    return this.http.get('assets/data/gallery.json')
       
  }
}
