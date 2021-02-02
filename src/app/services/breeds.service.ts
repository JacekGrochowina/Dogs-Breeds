import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetBreedsResponse } from '../resources/responses/get-breeds.response';
import { GetBreedImgResponse } from '../resources/responses/get-breed-img.response';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  readonly endpoints = {
    getBreeds: `${environment.apiUrl}s/list/all`,
    getBreedPhotos: (breed: string) => `${environment.apiUrl}/${breed}/images`,
    getSubBreedPhotos: (breed: string, subbreed: string) => `${environment.apiUrl}/${breed}/${subbreed}/images`,
  };

  constructor(private http: HttpClient) {
  }

  getBreeds(): Observable<GetBreedsResponse> {
    return this.http.get<GetBreedsResponse>(this.endpoints.getBreeds);
  }

  getBreedPhotos(breed: string): Observable<GetBreedImgResponse> {
    return this.http.get<GetBreedImgResponse>(this.endpoints.getBreedPhotos(breed));
  }

  getSubBreedPhotos(params: string[]): Observable<GetBreedImgResponse> {
    return this.http.get<GetBreedImgResponse>(this.endpoints.getSubBreedPhotos(params[0], params[1]));
  }
}
