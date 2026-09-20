import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDialog } from './product-dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('ProductDialog', () => {
  let component: ProductDialog;
  let fixture: ComponentFixture<ProductDialog>;

  const dialogRefMock = jasmine.createSpyObj('MatDialogRef', ['close']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDialog],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideToastr(),
        { provide: MatDialogRef, useValue: dialogRefMock },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            product: { id: 1, name: 'WS1'},
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
