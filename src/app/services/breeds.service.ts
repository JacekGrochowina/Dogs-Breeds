import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetBreedsSuccess } from '../resources/interfaces/GetBreedsSuccess';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  readonly endpoints = {
    getBreeds: `${environment.apiUrl}s/list/all`
  };

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<GetBreedsSuccess> {
    return this.http.get<GetBreedsSuccess>(this.endpoints.getBreeds);
  }
}
