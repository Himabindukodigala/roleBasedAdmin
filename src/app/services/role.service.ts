import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoleService {

  private baseUrl = 'http://localhost:5000/api/admin';

  constructor(private http: HttpClient) {}

  // Get matrix
  getRolePermissions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/roles/permissions`);
  }

  // Update permission
  updatePermission(roleId: number, permissions: string[]): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/roles/${roleId}/permissions`,
      permissions
    );
  }
}
