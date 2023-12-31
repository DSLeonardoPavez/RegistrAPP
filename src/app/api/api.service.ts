import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  regions$: Observable<any[]>;
  communes$: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.regions$ = new Observable<any[]>(); // Inicializa un observable vacío
    this.communes$ = new Observable<any[]>(); // Inicializa un observable vacío
  }

  fetchRegions(): Observable<any> {
    return this.http.get('https://dev.matiivilla.cl/duoc/location/region');
  }

  fetchCommunes(regionId: number): Observable<any> {
    const url = `https://dev.matiivilla.cl/duoc/location/comuna/${regionId}`;
    return this.http.get(url);
  }
}
