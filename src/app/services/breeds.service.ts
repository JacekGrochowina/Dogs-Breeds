import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  readonly endpoints = {
    getBreeds: `${environment.apiUrl}s/list/all`
  };

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<any> {
    return this.http.get(this.endpoints.getBreeds);
  }
}
