import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EastComponent } from './east.component';

describe('EastComponent', () => {
  let component: EastComponent;
  let fixture: ComponentFixture<EastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
