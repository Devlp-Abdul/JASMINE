import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTurnAroundComponent } from './create-turn-around.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
fdescribe('CreateTurnAroundComponent', () => {
  let component: CreateTurnAroundComponent;
  let fixture: ComponentFixture<CreateTurnAroundComponent>;
  let authService: SharedService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule
      ],
      declarations: [CreateTurnAroundComponent],
      providers: [
        SharedService,
        
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateTurnAroundComponent);
    authService = TestBed.inject(SharedService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Arrival_Data', () => {
    component.Arrival_Data()
    authService.ArrivalFlights().subscribe((data) => {
      expect(data).toEqual({});
    })
    expect(component.Arrival_Data).toBeTruthy();
  });

  // onChanges()
  // it('search becomes true when onSearch is clicked', () => {
  //   const val = 'something'
  //   spyOn(component, 'onChange');
  //   component.onChange(val);
  //   component.style = val
  //   expect(component.onChange(val)).toBeUndefined();
  //   expect(component.style).toEqual(val);
  // });

  // it('onClose', () => {
  //   spyOn(component, 'onClose');
  //   component.onClose();
  //   component.airline_match = false;
  //   expect(component.onClose).toHaveBeenCalledTimes(1);
  //   expect(component.airline_match).toBeFalse();
    
  // });

});
