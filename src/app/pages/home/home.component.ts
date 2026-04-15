import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: ProductItem[] = [
    {
      id: '1',
      name: 'Wireless Headphones',
      description: 'Premium audio with active noise cancellation.',
      price: 129,
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      name: 'Smart Watch',
      description: 'Stay connected with fitness and notifications.',
      price: 199,
      imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      name: 'Desk Lamp',
      description: 'Modern lighting for your home office.',
      price: 45,
      imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '4',
      name: 'Leather Backpack',
      description: 'Stylish carry for work and travel.',
      price: 89,
      imageUrl: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80'
    }
  ];
}
