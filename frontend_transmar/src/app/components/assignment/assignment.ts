import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ToastrService } from 'ngx-toastr';
import { AssemblyLineWorkstationService } from '../../_services/assembly-line-workstation-service';
import { GetAssemblyLineDto } from '../../models/assembly-line/get-assembly-line-dto';
import { GetWorkstationDto } from '../../models/workstation/get-workstation-dto';
import { AssemblyLineService } from '../../_services/assembly-line-service';
import { WorkstationService } from '../../_services/workstation-service';
import { GetAssemblyLineWorkstationDto } from '../../models/assembly-line-workstation/get-assignment-dto';
import { AddAssemblyLineWorkstationDto } from '../../models/assembly-line-workstation/add-assignment-dto';

@Component({
  selector: 'app-assignment',
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
    ReactiveFormsModule,
  ],
  templateUrl: './assignment.html',
  styleUrl: './assignment.scss',
})
export class Assignment implements OnInit {
  private assemblyLineWorkstationService = inject(AssemblyLineWorkstationService);
  private workstationService = inject(WorkstationService);
  private assemblyLineService = inject(AssemblyLineService);
  private toastr = inject(ToastrService);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);

  isAddingAssignment: boolean = false;

  private readonly defaultFormValue = {
    assemblyLineId: null,
    workstationId: null,
  };

  addAssignmentForm: FormGroup = this.fb.group({
    assemblyLineId: [null, [Validators.required]],
    workstationId: [null, [Validators.required]],
  });

  assemblyLines: GetAssemblyLineDto[] = [];
  workstations: GetWorkstationDto[] = [];

  assemblyLineWorkstations: GetAssemblyLineWorkstationDto[] = [];

  ngOnInit(): void {
    this.getWorkstations();
    this.getAssemblyLines();
    this.getAssignments();
  }

  getAssemblyLines() {
    this.assemblyLineService.getAll().subscribe({
      next: (response) => {
        this.assemblyLines = response;
        this.cdr.detectChanges();
      },
      error: () => console.error('server error.'),
    });
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

  getAssignments() {
    this.assemblyLineWorkstationService.getAll().subscribe({
      next: (response) => {
        this.assemblyLineWorkstations = response;
        console.log(this.assemblyLineWorkstations);
        this.cdr.detectChanges();
      },
      error: () => console.error('server error.'),
    });
  }

  changeFormVisibility() {
    this.isAddingAssignment = !this.isAddingAssignment;
    this.addAssignmentForm.reset(this.defaultFormValue);
  }

  onSubmit() {
    if (this.addAssignmentForm.invalid) {
      this.addAssignmentForm.markAllAsTouched();
      return;
    }

    const assignment: AddAssemblyLineWorkstationDto = {
      assemblyLineId: this.addAssignmentForm.value.assemblyLineId,
      workstationId: this.addAssignmentForm.value.workstationId,
    };

    this.assemblyLineWorkstationService.add(assignment).subscribe({
      next: () => {
        this.toastr.success('Assignment added.');
        this.addAssignmentForm.reset(this.defaultFormValue);
        this.isAddingAssignment = false;
        this.getAssignments();
      },
      error: (error) => {
        if (error.status === 400 || error.status === 409) {
          this.toastr.error(error.error.message);
        } else{
          this.toastr.error('Server error.');
        }
      },
    });
  }

  deleteItem(id: number) {
    this.assemblyLineWorkstationService.remove(id).subscribe({
      next: () => {
        this.toastr.success('Assignment removed sucessfully.');
        this.getAssignments();
      },
      error: (error) => console.log(error),
    });
  }
}
