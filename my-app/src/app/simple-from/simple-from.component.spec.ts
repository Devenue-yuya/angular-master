import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFromComponent } from './simple-from.component';

describe('SimpleFromComponent', () => {
  let component: SimpleFromComponent;
  let fixture: ComponentFixture<SimpleFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
