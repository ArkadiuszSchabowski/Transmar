import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { GetAssemblyLineDto } from '../../../models/assembly-line/get-assembly-line-dto';
import { GetProductDto } from '../../../models/product/get-product-dto';
import { AssemblyLineService } from '../../../_services/assembly-line-service';
import { ToastrService } from 'ngx-toastr';

export interface AssemblyLineDialogData {
  assemblyLine: GetAssemblyLineDto;
  products: GetProductDto[];
}

@Component({
  selector: 'app-assembly-line-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
  templateUrl: './assembly-line-dialog.html',
  styleUrl: './assembly-line-dialog.scss',
})
export class AssemblyLineDialog {
  private assemblyLineService = inject(AssemblyLineService);
  private toastr = inject(ToastrService);
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<AssemblyLineDialog>);
  data = inject<AssemblyLineDialogData>(MAT_DIALOG_DATA);

  isSaving = false;

  form: FormGroup = this.fb.group({
    name: [
      this.data.assemblyLine.name,
      [Validators.required, Validators.minLength(3), Validators.maxLength(25)],
    ],
    active: [this.data.assemblyLine.active],
    productId: [this.data.assemblyLine.productId, [Validators.required]],
  });

  onSave() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSaving = true;

    this.assemblyLineService.update(this.data.assemblyLine.id, this.form.value).subscribe({
      next: () => {
        this.toastr.success('Assembly line updated successfully.');
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