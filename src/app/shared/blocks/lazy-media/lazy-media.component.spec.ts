import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyMediaComponent } from './lazy-media.component';

describe('LazyMediaComponent', () => {
  let component: LazyMediaComponent;
  let fixture: ComponentFixture<LazyMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyMediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
