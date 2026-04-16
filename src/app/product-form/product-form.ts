import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm implements OnInit {

  isEdit = false;
  productId = '';
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      imageUrl: ['', Validators.required],
      stock: [0, Validators.required],
      categoryId: ['', Validators.required],
      isActive: [true]
    });
  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEdit = true;
      this.productId = id;

      this.productService.getById(id).subscribe({
        next: (res) => this.form.patchValue(res)
      });
    }
  }

  submit() {
    if (this.form.invalid) return;

    const apiCall = this.isEdit
      ? this.productService.update(this.productId, this.form.value)
      : this.productService.create(this.form.value);

    apiCall.subscribe({
      next: () => {
        alert('Saved successfully (DB updated)');
        this.router.navigate(['/admin/products']);
      }
    });
  }
}
