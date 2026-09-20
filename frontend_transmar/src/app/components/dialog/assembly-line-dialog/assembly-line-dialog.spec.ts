import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyLineDialog } from './assembly-line-dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('AssemblyLineDialog', () => {
  let component: AssemblyLineDialog;
  let fixture: ComponentFixture<AssemblyLineDialog>;

  const dialogRefMock = jasmine.createSpyObj('MatDialogRef', ['close']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssemblyLineDialog],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideToastr(),
        { provide: MatDialogRef, useValue: dialogRefMock },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            assemblyLine: { id: 1, name: 'WS1', active: true, productId: 1},
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AssemblyLineDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
