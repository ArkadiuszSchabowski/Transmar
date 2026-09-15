import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyLineList } from './assembly-line-list';

describe('AssemblyLineList', () => {
  let component: AssemblyLineList;
  let fixture: ComponentFixture<AssemblyLineList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssemblyLineList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssemblyLineList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
