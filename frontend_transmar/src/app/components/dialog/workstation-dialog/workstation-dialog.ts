import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { GetWorkstationDto } from '../../../models/workstation/get-workstation-dto';
import { WorkstationService } from '../../../_services/workstation-service';
import { ToastrService } from 'ngx-toastr';

export interface WorkstationDialogData {
  workstation: GetWorkstationDto;
}

@Component({
  selector: 'app-workstation-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './workstation-dialog.html',
  styleUrl: './workstation-dialog.scss',
})
export class WorkstationDialog {
  private workstationService = inject(WorkstationService);
  private toastr = inject(ToastrService);
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<WorkstationDialog>);
  data = inject<WorkstationDialogData>(MAT_DIALOG_DATA);

  isSaving = false;

  form: FormGroup = this.fb.group({
    name: [
      this.data.workstation.name,
      [Validators.required, Validators.minLength(3), Validators.maxLength(25)],
    ],
    shortName: [
      this.data.workstation.shortName,
      [Validators.required, Validators.minLength(2), Validators.maxLength(10)],
    ],
    pcName: [
      this.data.workstation.pcName,
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
  });

  onSave() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSaving = true;

    this.workstationService.update(this.data.workstation.id, this.form.value).subscribe({
      next: () => {
        this.toastr.success('Workstation updated successfully.');
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