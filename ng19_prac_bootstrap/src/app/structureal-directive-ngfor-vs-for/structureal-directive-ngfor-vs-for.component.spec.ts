import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructurealDirectiveNgforVsForComponent } from './structureal-directive-ngfor-vs-for.component';

describe('StructurealDirectiveNgforVsForComponent', () => {
  let component: StructurealDirectiveNgforVsForComponent;
  let fixture: ComponentFixture<StructurealDirectiveNgforVsForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructurealDirectiveNgforVsForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructurealDirectiveNgforVsForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
