import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { max, min } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultaapiService {
  constructor(private http: HttpClient) {}
  retornar() {
    let randmy: Number = Math.floor(Math.random() * (100 - 1) - 1);
    return this.http.get(`https://rickandmortyapi.com/api/character/${randmy}`);
  }
}
