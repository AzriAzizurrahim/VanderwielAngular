import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Vandewiele } from '../models/vandewiele';

@Injectable({
  providedIn: 'root'
})
export class VandewieleService {
  private url = "Vandewiele";

  constructor(private http: HttpClient) { }

  public getVanderwiele() : Observable<Vandewiele[]> {

    return this.http.get<Vandewiele[]>(`${environment.apiUrl}/${this.url}`)
   
  }
}
