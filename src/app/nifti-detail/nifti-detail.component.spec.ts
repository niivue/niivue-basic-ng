import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiftiDetailComponent } from './nifti-detail.component';

describe('NiftiDetailComponent', () => {
  let component: NiftiDetailComponent;
  let fixture: ComponentFixture<NiftiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiftiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiftiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
