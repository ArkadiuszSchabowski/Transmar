import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment } from './assignment';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

describe('Assignment', () => {
  let component: Assignment;
  let fixture: ComponentFixture<Assignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment],
      providers: [provideZonelessChangeDetection(), provideHttpClient(), provideToastr()],
    }).compileComponents();

    fixture = TestBed.createComponent(Assignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
