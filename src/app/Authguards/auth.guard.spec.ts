import { getTestBed, TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { SharedService } from '../shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthGuard',async () => {
  let injector: TestBed;
  let authService: SharedService;
  let guard: AuthGuard;
  let routerMock = {navigate: jasmine.createSpy('navigate')}
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        RouterModule.forRoot([
          { path: '', component: LoginPageComponent },
          { path: 'login', component: LoginPageComponent },
        ]),
      ],
      providers: [
        SharedService,
        { provide: Router, useValue: routerMock },
      ]
    });
    injector = getTestBed();
    authService = injector.get(SharedService);
    guard = injector.get(AuthGuard);
    
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true for canActivate() when auth.isLoggedIn() === true', () => {
    spyOn(authService,'isLoggedIn').and.returnValue(true);
    expect(guard.canActivate()).toBeTrue();
  });

  it('should return false for canActivate() when auth.isLoggedIn() === false', () => {
    spyOn(authService,'isLoggedIn').and.returnValue(false);
    guard.canActivate();
    expect(routerMock.navigate).toHaveBeenCalledWith(['login']);
  });

});
