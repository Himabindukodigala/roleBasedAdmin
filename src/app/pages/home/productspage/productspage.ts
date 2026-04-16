import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-productspage',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './productspage.html',
  styleUrl: './productspage.css',
})
export class Productspage implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => console.error(err)
    });
  }
}