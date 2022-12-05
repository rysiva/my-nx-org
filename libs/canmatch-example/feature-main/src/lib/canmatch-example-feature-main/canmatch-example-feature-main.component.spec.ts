import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanmatchExampleFeatureMainComponent } from './canmatch-example-feature-main.component';

describe('CanmatchExampleFeatureMainComponent', () => {
  let component: CanmatchExampleFeatureMainComponent;
  let fixture: ComponentFixture<CanmatchExampleFeatureMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanmatchExampleFeatureMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CanmatchExampleFeatureMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
