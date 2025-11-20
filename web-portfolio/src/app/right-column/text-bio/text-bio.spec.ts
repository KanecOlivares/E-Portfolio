import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBio } from './text-bio';

describe('TextBio', () => {
  let component: TextBio;
  let fixture: ComponentFixture<TextBio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
