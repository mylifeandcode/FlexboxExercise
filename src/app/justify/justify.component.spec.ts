import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustifyComponent } from './justify.component';

describe('JustifyComponent', () => {
  let component: JustifyComponent;
  let fixture: ComponentFixture<JustifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JustifyComponent]
    });
    fixture = TestBed.createComponent(JustifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
