import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { GetProductDto } from '../../../models/product/get-product-dto';
import { ProductService } from '../../../_services/product-service';
import { ToastrService } from 'ngx-toastr';

export interface ProductDialogData {
  product: GetProductDto;
}

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './product-dialog.html',
  styleUrl: './product-dialog.scss',
})
export class ProductDialog {
  private productService = inject(ProductService);
  private toastr = inject(ToastrService);
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<ProductDialog>);
  data = inject<ProductDialogData>(MAT_DIALOG_DATA);

  isSaving = false;

  form: FormGroup = this.fb.group({
    name: [
      this.data.product.name,
      [Validators.required, Validators.minLength(3), Validators.maxLength(25)],
    ],
  });

  onSave() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSaving = true;

    this.productService.update(this.data.product.id, this.form.value).subscribe({
      next: () => {
        this.toastr.success('Product updated successfully.');
        this.dialogRef.close(true);
      },
      error: (error) => {
        this.isSaving = false;
        if (error.status === 400) {
          this.toastr.error(error.error.message);
        } else {
          this.toastr.error('Server error.');
        }
      },
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}