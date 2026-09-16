import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstationDialog } from './workstation-dialog';

describe('WorkstationDialog', () => {
  let component: WorkstationDialog;
  let fixture: ComponentFixture<WorkstationDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkstationDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkstationDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
