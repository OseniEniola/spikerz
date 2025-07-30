import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemediationTechniqueComponent } from './remediation-technique.component';

describe('RemediationTechniqueComponent', () => {
  let component: RemediationTechniqueComponent;
  let fixture: ComponentFixture<RemediationTechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemediationTechniqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemediationTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
