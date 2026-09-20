import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstationDialog } from './workstation-dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('WorkstationDialog', () => {
  let component: WorkstationDialog;
  let fixture: ComponentFixture<WorkstationDialog>;

  const dialogRefMock = jasmine.createSpyObj('MatDialogRef', ['close']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkstationDialog],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideToastr(),
        { provide: MatDialogRef, useValue: dialogRefMock },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            workstation: { id: 1, name: 'WS1', shortName: 'W1', pcName: 'PC1' },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkstationDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
