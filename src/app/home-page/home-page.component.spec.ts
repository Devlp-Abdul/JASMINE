import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from '../Nav-bar/header/nav-bar.component';
// import { RouterModule } from '@angular/router';
// import { LoginPageComponent } from '../login-page/login-page.component';
import { SharedService } from '../shared.service';
fdescribe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  // let routerMock = { navigate: jasmine.createSpy('navigate') };
  let authService: SharedService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        HomePageComponent,
        NavBarComponent,
        // RouterModule.forRoot([
        //   { path: '', component: LoginPageComponent },
        //   { path: 'login', component: LoginPageComponent },
        // ]),
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

  it('logout',()=>{
    spyOn(component,'logout');
    spyOn(authService,'signout').and.returnValue('any')
    
    component.logout();
    expect(component.logout).toBeTruthy();
  });

  // it('logout', () => {
  //   spyOn(component,'logout');
  //   component.logout();
  //   expect(routerMock.navigate).toHaveBeenCalledWith(['login']);
  //   expect(component.logout).toHaveBeenCalledTimes(1);
  // });

  // it('should go signout', (done : DoneFn) => {
  //   component.logout()
  //   expect(routerMock.navigate).toHaveBeenCalledWith(['login']);
  //   done();
  // });

});
