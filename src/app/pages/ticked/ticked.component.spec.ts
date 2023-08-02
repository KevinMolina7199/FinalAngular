import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickedComponent } from './ticked.component';

describe('TickedComponent', () => {
  let component: TickedComponent;
  let fixture: ComponentFixture<TickedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
