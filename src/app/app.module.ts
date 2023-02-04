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

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    AddMovieComponent,
    ScreenComponent
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
