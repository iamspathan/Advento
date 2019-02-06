import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FAreaComponent } from './f-area.component';

describe('FAreaComponent', () => {
  let component: FAreaComponent;
  let fixture: ComponentFixture<FAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
