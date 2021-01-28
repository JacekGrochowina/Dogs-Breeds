import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetBreedsResponse } from '../resources/responses/get-breeds.response';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  readonly endpoints = {
    getBreeds: `${environment.apiUrl}s/list/all`
  };

  constructor(private http: HttpClient) {
  }

  getBreeds(): Observable<GetBreedsResponse> {
    return this.http.get<GetBreedsResponse>(this.endpoints.getBreeds);
  }
}
