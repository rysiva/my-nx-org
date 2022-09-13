import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosFeatureMainComponent } from './todos-feature-main.component';

describe('TodosFeatureMainComponent', () => {
  let component: TodosFeatureMainComponent;
  let fixture: ComponentFixture<TodosFeatureMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosFeatureMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosFeatureMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
