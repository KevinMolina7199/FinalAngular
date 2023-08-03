import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSComponent } from './ticket-s.component';

describe('TicketSComponent', () => {
  let component: TicketSComponent;
  let fixture: ComponentFixture<TicketSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
