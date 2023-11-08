import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignComponent } from './align.component';

describe('AlignComponent', () => {
  let component: AlignComponent;
  let fixture: ComponentFixture<AlignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlignComponent]
    });
    fixture = TestBed.createComponent(AlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
