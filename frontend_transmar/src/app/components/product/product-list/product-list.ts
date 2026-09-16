import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../_services/product-service';
import { GetProductDto } from '../../../models/product/get-product-dto';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductDialog } from '../../dialog/product-dialog/product-dialog';

@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCard,
    MatCardContent,
    MatDialogModule,
    MatFormField,
    MatLabel,
    MatError,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  private productService = inject(ProductService);
  private toastr = inject(ToastrService);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private dialog = inject(MatDialog);

  products: GetProductDto[] = [];
  isAddingProduct: boolean = false;

  addProductForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
  });

  ngOnInit(): void {
    this.getProducts();
  }

  changeFormVisibility() {
    this.isAddingProduct = !this.isAddingProduct;
    this.addProductForm.reset();
  }

  getProducts() {
    this.productService.getAll().subscribe({
      next: (response) => {
        this.products = response;
        console.log(this.products);
        this.cdr.detectChanges();
      },
      error: () => console.error('server error.'),
    });
  }

  onSubmit() {
    if (this.addProductForm.invalid) {
      this.addProductForm.markAllAsTouched();
      return;
    }

    const name = this.addProductForm.value.name;

    this.productService.add({ name }).subscribe({
      next: () => {
        this.toastr.success('Product added sucessfully.');
        this.addProductForm.reset();
        this.isAddingProduct = false;
        this.getProducts();
      },
      error: (error) => {
        if (error.status === 400) {
          this.toastr.error(error.error.message);
        }
        this.toastr.error('Server error.');
      },
    });
  }

  editItem(product: GetProductDto) {
    const dialogRef = this.dialog.open(ProductDialog, {
      width: '300px',
      data: { product },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getProducts();
      }
    });
  }

  deleteItem(id: number) {
    this.productService.remove(id).subscribe({
      next: () => {
        this.toastr.success('Product removed sucessfully.');
        this.getProducts();
      },
      error: (error) => {
        if (error.status === 409) {
          this.toastr.error(error.error.message);
        } else this.toastr.error('Server error.');
      },
    });
  }
}