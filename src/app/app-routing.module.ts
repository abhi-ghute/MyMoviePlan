import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './admin/add-movie/add-movie.component';
import { AddShowComponent } from './admin/add-show/add-show.component';
import { AdminComponent } from './admin/admin.component';
import { EditmovieComponent } from './admin/editmovie/editmovie.component';
import { MoviesListComponent } from './admin/movies-list/movies-list.component';
import { AppPaymentComponent } from './app-payment/app-payment.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ScreenComponent } from './movie/screen/screen.component';
import { SearchComponent } from './search/search.component';
import { BookingDetailsComponent } from './user/booking-details/booking-details.component';
import { BookingHistoryComponent } from './user/booking-history/booking-history.component';
import { LoginComponent } from './user/login/login.component';
import { MoviesComponent } from './user/movies/movies.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ShowMovieDetailsComponent } from './user/show-movie-details/show-movie-details.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children:[
      {path:'register',component:RegistrationComponent},
      {path:'movies',component:MoviesComponent},
      {path:'showMovieDetails/:id',component:ShowMovieDetailsComponent},
      {path:'ticket',component:BookingDetailsComponent},
      {path:'ticketHistory',component:BookingHistoryComponent}
    ]
  },
  {
    path: 'admin', component: AdminComponent,
    children:[
      {path:'addMovie',component:AddMovieComponent},
      {path:'editMovie/:id',component:EditmovieComponent},
      {path:'moviesList',component:MoviesListComponent},
      {path:'addShow',component:AddShowComponent}
    ]
  },
  {path:'login',component:LoginComponent},
  {path:'changePassword',component:ChangePasswordComponent},
  {
    path: 'book', component: ScreenComponent
  },
  {
    path: 'payment', component: AppPaymentComponent
  },
  {
    path: 'home', component: MoviesComponent
  },
  {
    path: '', component: MoviesComponent
  },
  {
    path:'search',component:SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
