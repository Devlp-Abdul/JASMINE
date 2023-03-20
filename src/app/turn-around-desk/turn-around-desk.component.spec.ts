import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnAroundDeskComponent } from './turn-around-desk.component';

fdescribe('TurnAroundDeskComponent', () => {
  let component: TurnAroundDeskComponent;
  let fixture: ComponentFixture<TurnAroundDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnAroundDeskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnAroundDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
