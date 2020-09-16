import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCompComponent } from './b-comp.component';

describe('BCompComponent', () => {
  let component: BCompComponent;
  let fixture: ComponentFixture<BCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
