import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACompComponent } from './a-comp.component';

describe('ACompComponent', () => {
  let component: ACompComponent;
  let fixture: ComponentFixture<ACompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ACompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
