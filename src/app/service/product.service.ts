import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = "http://localhost:8080/api"

  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'Application/json' });
    return this.http
      .get<any>(`${this.url}/products/all`, { headers })
      .pipe(map(res => res.result));
  }

  getAllProductsByType(type: string): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'Application/json' });
    return this.http
      .get<any>(`${this.url}/products/all/type/${type}`, { headers })
      .pipe(map(res => res.result));
  }
}
