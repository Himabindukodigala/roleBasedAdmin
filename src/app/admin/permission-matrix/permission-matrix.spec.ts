import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PermissionMatrixComponent } from './permission-matrix';

describe('PermissionMatrix', () => {
  let component: PermissionMatrixComponent;
  let fixture: ComponentFixture<PermissionMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionMatrixComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PermissionMatrixComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
