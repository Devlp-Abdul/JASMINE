import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './Authguards/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavBarComponent } from './Nav-bar/header/nav-bar.component';
import { ScheduleSearchComponent } from './Schedule_search/schedule-search/schedule-search.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {MatDatepickerModule} from '@angular/material/datepicker';
 import { MatNativeDateModule } from '@angular/material/core';
 import {MatInputModule} from '@angular/material/input';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { CustomFilterPipe } from './services/custom-filter.pipe';
import { EditFlightComponent } from './Schedule_search/edit-flight/edit-flight.component';
import { DeleteFlightComponent } from './Schedule_search/delete-flight/delete-flight.component';
import { CreateTurnAroundComponent } from './create-turn-around/create-turn-around.component';
import { TurnAroundDeskComponent } from './turn-around-desk/turn-around-desk.component';
import { SharedService } from './shared.service';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignUpComponent,
    NavBarComponent,
    ScheduleSearchComponent,
    CreateFlightComponent,
    CustomFilterPipe,
    EditFlightComponent,
    DeleteFlightComponent,
    CreateTurnAroundComponent,
    TurnAroundDeskComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    // Ng2SearchPipeModule,
    RouterModule.forRoot([
      {path :'', component : LoginPageComponent },
      {path :'login', component : LoginPageComponent },     
      {path :'signup', component : SignUpComponent},
      {path :'home', component : HomePageComponent },
      {path :'schedule', component : ScheduleSearchComponent },
      {path :'create', component : CreateFlightComponent },
      {path :'edit/:id', component : EditFlightComponent },
      {path :'delete/:id', component : DeleteFlightComponent },
      {path :'create_around', component : CreateTurnAroundComponent },
      {path :'TurnAroundDesk/:id', component : TurnAroundDeskComponent }
    ]),    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
