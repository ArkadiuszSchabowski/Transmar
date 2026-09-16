import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyLineDialog } from './assembly-line-dialog';

describe('AssemblyLineDialog', () => {
  let component: AssemblyLineDialog;
  let fixture: ComponentFixture<AssemblyLineDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssemblyLineDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssemblyLineDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
