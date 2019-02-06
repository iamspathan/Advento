import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryareaComponent } from './categoryarea.component';

describe('CategoryareaComponent', () => {
  let component: CategoryareaComponent;
  let fixture: ComponentFixture<CategoryareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
