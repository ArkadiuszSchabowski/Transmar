import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstationList } from './workstation-list';

describe('WorkstationList', () => {
  let component: WorkstationList;
  let fixture: ComponentFixture<WorkstationList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkstationList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkstationList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
