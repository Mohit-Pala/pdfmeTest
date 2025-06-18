import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfThing } from './pdf-thing';

describe('PdfThing', () => {
  let component: PdfThing;
  let fixture: ComponentFixture<PdfThing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfThing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfThing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
