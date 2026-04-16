import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-permission-matrix',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  templateUrl: './permission-matrix.html'
})
export class PermissionMatrixComponent {

  roles: any[] = [
    {
      id: 1,
      name: 'Admin',
      permissions: ['ViewHome', 'ViewProducts', 'ManageProducts', 'ManageUsers']
    },
    {
      id: 2,
      name: 'User',
      permissions: ['ViewHome', 'ViewProducts', 'AddToCart', 'PlaceOrder']
    },
    {
      id: 3,
      name: 'Guest',
      permissions: ['ViewHome', 'ViewProducts']
    }
  ];

  permissions: string[] = [
    'ViewHome',
    'ViewProducts',
    'AddToCart',
    'PlaceOrder',
    'ManageProducts',
    'ManageUsers'
  ];

  displayedColumns: string[] = ['role', ...this.permissions];

  // ✅ FIXED ERROR
  hasPermission(role: any, perm: string): boolean {
    return role.permissions.includes(perm);
  }

  // ✅ FIXED ERROR
  toggle(role: any, perm: string) {
    if (this.hasPermission(role, perm)) {
      role.permissions = role.permissions.filter((p: string) => p !== perm);
    } else {
      role.permissions.push(perm);
    }

    console.log('Updated:', role);
  }
}
