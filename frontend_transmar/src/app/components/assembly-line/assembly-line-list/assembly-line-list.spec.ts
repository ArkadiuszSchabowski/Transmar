import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyLineList } from './assembly-line-list';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

describe('AssemblyLineList', () => {
  let component: AssemblyLineList;
  let fixture: ComponentFixture<AssemblyLineList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssemblyLineList],
      providers: [provideZonelessChangeDetection(), provideHttpClient(), provideToastr()],
    }).compileComponents();

    fixture = TestBed.createComponent(AssemblyLineList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
