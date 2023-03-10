import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './user/login/login.component';
import { AddMovieComponent } from './admin/add-movie/add-movie.component';
import { ScreenComponent } from './movie/screen/screen.component';
import { EditmovieComponent } from './admin/editmovie/editmovie.component';
import { MoviesListComponent } from './admin/movies-list/movies-list.component';
import { AddShowComponent } from './admin/add-show/add-show.component';
import { MoviesComponent } from './user/movies/movies.component';
import { ShowMovieDetailsComponent } from './user/show-movie-details/show-movie-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppPaymentComponent } from './app-payment/app-payment.component';
import { BookingDetailsComponent } from './user/booking-details/booking-details.component';
import { BookingHistoryComponent } from './user/booking-history/booking-history.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    AddMovieComponent,
    ScreenComponent,
    EditmovieComponent,
    MoviesListComponent,
    AddShowComponent,
    MoviesComponent,
    ShowMovieDetailsComponent,
    HeaderComponent,
    FooterComponent,
    AppPaymentComponent,
    BookingDetailsComponent,
    BookingHistoryComponent,
    ChangePasswordComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
