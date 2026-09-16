import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { WorkstationService } from '../../../_services/workstation-service';
import { GetWorkstationDto } from '../../../models/workstation/get-workstation-dto';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddWorkstationDto } from '../../../models/workstation/add-workstation-dto';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { WorkstationDialog } from '../../dialog/workstation-dialog/workstation-dialog';

@Component({
  selector: 'app-workstation-list',
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
  templateUrl: './workstation-list.html',
  styleUrl: './workstation-list.scss',
})
export class WorkstationList implements OnInit {
  private workstationService = inject(WorkstationService);
  private toastr = inject(ToastrService);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private dialog = inject(MatDialog);

  workstations: GetWorkstationDto[] = [];
  isAddingWorkstation: boolean = false;

  addWorkstationForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    shortName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
    pcName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
  });

  ngOnInit(): void {
    this.getWorkstations();
  }

  changeFormVisibility() {
    this.isAddingWorkstation = !this.isAddingWorkstation;
    this.addWorkstationForm.reset();
  }

  getWorkstations() {
    this.workstationService.getAll().subscribe({
      next: (response) => {
        this.workstations = response;
        console.log(this.workstations);
        this.cdr.detectChanges();
      },
      error: () => console.error('server error.'),
    });
  }

  onSubmit() {
    if (this.addWorkstationForm.invalid) {
      this.addWorkstationForm.markAllAsTouched();
      return;
    }

    const workstation: AddWorkstationDto = {
      name: this.addWorkstationForm.value.name,
      shortName: this.addWorkstationForm.value.shortName,
      pcName: this.addWorkstationForm.value.pcName,
    };

    this.workstationService.add(workstation).subscribe({
      next: () => {
        this.toastr.success('Workstation added sucessfully.');
        this.addWorkstationForm.reset();
        this.isAddingWorkstation = false;
        this.getWorkstations();
      },
      error: (error) => {
        if (error.status === 400) {
          this.toastr.error(error.error.message);
        }
        this.toastr.error('Server error.');
      },
    });
  }

  editItem(workstation: GetWorkstationDto) {
    const dialogRef = this.dialog.open(WorkstationDialog, {
      width: '300px',
      data: { workstation },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getWorkstations();
      }
    });
  }

  deleteItem(id: number) {
    this.workstationService.remove(id).subscribe({
      next: () => {
        this.toastr.success('Workstation removed sucessfully.');
        this.getWorkstations();
      },
      error: (error) => console.log(error),
    });
  }
}