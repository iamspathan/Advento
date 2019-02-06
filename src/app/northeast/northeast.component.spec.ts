import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NortheastComponent } from './northeast.component';

describe('NortheastComponent', () => {
  let component: NortheastComponent;
  let fixture: ComponentFixture<NortheastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NortheastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NortheastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
