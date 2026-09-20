import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstationList } from './workstation-list';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

describe('WorkstationList', () => {
  let component: WorkstationList;
  let fixture: ComponentFixture<WorkstationList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkstationList],
      providers: [provideZonelessChangeDetection(), provideHttpClient(), provideToastr()],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkstationList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
