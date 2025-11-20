import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CptCarousel } from './cpt-carousel';

describe('CptCarousel', () => {
  let component: CptCarousel;
  let fixture: ComponentFixture<CptCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CptCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CptCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
