import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipDateComponent } from './recip-date.component';

describe('RecipDateComponent', () => {
  let component: RecipDateComponent;
  let fixture: ComponentFixture<RecipDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
