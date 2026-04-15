import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface DashboardStat {
  label: string;
  value: string;
  icon: string;
  colorClass: string;
}

interface ProductSummary {
  title: string;
  price: string;
  status: string;
  badge: string;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  protected readonly stats: DashboardStat[] = [
    { label: 'Total orders', value: '342', icon: '📦', colorClass: 'text-primary' },
    { label: 'Active users', value: '1,280', icon: '👥', colorClass: 'text-success' },
    { label: 'Revenue', value: '$59.2K', icon: '💰', colorClass: 'text-warning' },
    { label: 'Products', value: '78', icon: '🛍️', colorClass: 'text-info' }
  ];

  protected readonly products: ProductSummary[] = [
    { title: 'Wireless headphones', price: '$99', status: 'In stock', badge: 'Best seller' },
    { title: 'Smartwatch Pro', price: '$249', status: 'Low stock', badge: 'Trending' },
    { title: 'Home office lamp', price: '$42', status: 'In stock', badge: 'New' },
    { title: 'Leather backpack', price: '$79', status: 'In stock', badge: 'Popular' }
  ];
}
