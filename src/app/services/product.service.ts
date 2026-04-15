import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {

    private baseUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  create(product: any): Observable<any> {
    return this.http.post(this.baseUrl, product);
  }

  update(id: string, product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
