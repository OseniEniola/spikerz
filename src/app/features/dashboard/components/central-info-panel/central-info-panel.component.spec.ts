import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralInfoPanelComponent } from './central-info-panel.component';

describe('CentralInfoPanelComponent', () => {
  let component: CentralInfoPanelComponent;
  let fixture: ComponentFixture<CentralInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralInfoPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
