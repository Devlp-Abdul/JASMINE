import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from '../Nav-bar/header/nav-bar.component';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let mockRouter;
  let authService: SharedService;
  beforeEach(async () => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        HomePageComponent,
        NavBarComponent,
      ],
      providers: [
        { provide: Router, useValue: mockRouter },        
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(SharedService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call GetArrivalTurnAroundDesk', () => {
    const service = fixture.debugElement.injector.get(SharedService);
    spyOn(service,'GetArrivalTurnAroundDesk').and.returnValue(of({}));
    component.ngOnInit();
    expect(component.ArrInfo).toEqual({});
  });

  it('should call GetDepartureTurnAroundDesk', () => {
    const service = fixture.debugElement.injector.get(SharedService);
    spyOn(service,'GetDepartureTurnAroundDesk').and.returnValue(of({}));
    component.ngOnInit();
    expect(component.DepInfo).toEqual({});
  });

  // it('should go signup', async(() => {
  //   fixture.detectChanges();
  //   component.logout();
  //   expect(mockRouter.navigate).toHaveBeenCalledWith(['login']);
  // }));

});
