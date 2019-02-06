import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeareaComponent } from './welcomearea.component';

describe('WelcomeareaComponent', () => {
  let component: WelcomeareaComponent;
  let fixture: ComponentFixture<WelcomeareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
