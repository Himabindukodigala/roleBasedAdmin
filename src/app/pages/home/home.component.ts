import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Slide {
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Category {
  title: string;
  subtitle: string;
  color: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  protected readonly slides: Slide[] = [
    {
      title: 'Sell faster with an admin-led store',
      subtitle: 'Manage inventory, approve orders and update products from a clean admin dashboard.',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
      buttonText: 'Explore admin',
      buttonLink: '/admin'
    },
    {
      title: 'Create memorable shopping experiences',
      subtitle: 'A premium homepage with featured products, banners and fast checkout flows.',
      image: 'https://images.unsplash.com/photo-1515125520145-94cbb87df3de?auto=format&fit=crop&w=1200&q=80',
      buttonText: 'View collections',
      buttonLink: '/'
    },
    {
      title: 'Role-based access for every team',
      subtitle: 'Admin, manager and customer pages all work together in a single e-commerce experience.',
      image: 'https://images.unsplash.com/photo-1580894732444-d6507b4f167f?auto=format&fit=crop&w=1200&q=80',
      buttonText: 'Login now',
      buttonLink: '/login'
    }
  ];

  protected readonly categories: Category[] = [
    {
      title: 'Trending products',
      subtitle: 'Top selling electronics, fashion and home goods.',
      color: 'bg-primary'
    },
    {
      title: 'Inventory management',
      subtitle: 'Quick access to stock, product names and variants.',
      color: 'bg-success'
    },
    {
      title: 'Order tracking',
      subtitle: 'Review order flow from pending to delivered.',
      color: 'bg-warning'
    }
  ];

  protected readonly features: Feature[] = [
    {
      icon: '🛒',
      title: 'Shop-ready cards',
      description: 'Display products with crisp cards, purchase actions, and modern shop layout.'
    },
    {
      icon: '📊',
      title: 'Admin analytics',
      description: 'Monitor orders, revenue and user activity with dashboard summary cards.'
    },
    {
      icon: '🔐',
      title: 'Secure access',
      description: 'Separate admin and user sections to keep your product data safe.'
    }
  ];
}
