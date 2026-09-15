import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { AssemblyLineService } from '../../../_services/assembly-line-service';
import { GetAssemblyLineDto } from '../../../models/assembly-line/get-assembly-line-dto';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddAssemblyLineDto } from '../../../models/assembly-line/add-assembly-line-dto';
import { GetProductDto } from '../../../models/product/get-product-dto';
import { ProductService } from '../../../_services/product-service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-assembly-line-list',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCard,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatError,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  templateUrl: './assembly-line-list.html',
  styleUrl: './assembly-line-list.scss',
})
export class AssemblyLineList implements OnInit {
  private assemblyLineService = inject(AssemblyLineService);
  private toastr = inject(ToastrService);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private productService = inject(ProductService);

  assemblyLines: GetAssemblyLineDto[] = [];
  products: GetProductDto[] = [];
  isAddingAssemblyLine: boolean = false;

  private readonly defaultFormValue = {
    name: '',
    active: false,
    productId: null,
  };

  addAssemblyLineForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    active: [false],
    productId: [null, [Validators.required]],
  });

  getAssemblyLineForm: any = this.fb.group({
    name: [null],
  });

  ngOnInit(): void {
    this.getProducts();
    this.getAssemblyLines();
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

  getProductsByName(name: string | null) {
    console.log(name);
    if (!name) {
      this.getAssemblyLines();
      return;
    }

    this.assemblyLineService.getByProduct(name).subscribe({
      next: (response) => {
        this.assemblyLines = response ?? [];
        this.cdr.detectChanges();
      },
      error: () => console.error('server error.'),
    });
  }

  changeFormVisibility() {
    this.isAddingAssemblyLine = !this.isAddingAssemblyLine;
    this.addAssemblyLineForm.reset(this.defaultFormValue);
  }

  getAssemblyLines() {
    this.assemblyLineService.getAll().subscribe({
      next: (response) => {
        this.assemblyLines = response;
        console.log(this.assemblyLines);
        this.cdr.detectChanges();
      },
      error: () => console.error('server error.'),
    });
  }

  onSubmit() {
    if (this.addAssemblyLineForm.invalid) {
      this.addAssemblyLineForm.markAllAsTouched();
      return;
    }

    const assemblyLine: AddAssemblyLineDto = {
      name: this.addAssemblyLineForm.value.name,
      active: this.addAssemblyLineForm.value.active,
      productId: this.addAssemblyLineForm.value.productId,
    };

    this.assemblyLineService.add(assemblyLine).subscribe({
      next: () => {
        this.toastr.success('Assembly line added.');
        this.addAssemblyLineForm.reset(this.defaultFormValue);
        this.isAddingAssemblyLine = false;
        this.getAssemblyLines();
      },
      error: (error) => {
        if (error.status === 400) {
          this.toastr.error(error.error.message);
        }
        this.toastr.error('Server error.');
      },
    });
  }

  editItem(assemblyLine: GetAssemblyLineDto) {
    console.log(assemblyLine);
  }

  deleteItem(id: number) {
    this.assemblyLineService.remove(id).subscribe({
      next: () => {
        this.toastr.success('Item removed sucessfully.');
        this.getAssemblyLines();
      },
      error: (error) => console.log(error),
    });
  }
}