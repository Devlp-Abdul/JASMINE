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

  it('Should call on Arrival',async () => {
    spyOn(component,'onArrival');
    component.onArrival();
    expect(component.onArrival).toHaveBeenCalledTimes(1);
  })

  it('Should call on Arrival and change the values',async () => {   
    // component.isArrival = true;
    // component.isDeparture = false;
    component.onArrival();
    expect(component.isArrival).toBeTrue();
    expect(component.isDeparture).toBeFalse();
  })

  it('Should call on Departure',async () => {
    spyOn(component,'onDeparture');
    component.onDeparture();
    expect(component.onDeparture).toHaveBeenCalledTimes(1);
  })

  it('Should call on Departure and change the values',async () => {
    // component.isArrival = false;
    // component.isDeparture = true;
    component.onDeparture();
    expect(component.isArrival).toBeFalse();
    expect(component.isDeparture).toBeTrue();
  })
});
