import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './admin/add-movie/add-movie.component';
import { AddShowComponent } from './admin/add-show/add-show.component';
import { AdminComponent } from './admin/admin.component';
import { EditmovieComponent } from './admin/editmovie/editmovie.component';
import { MoviesListComponent } from './admin/movies-list/movies-list.component';
import { ScreenComponent } from './movie/screen/screen.component';
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
      {path:'login',component:LoginComponent},
      {path:'movies',component:MoviesComponent},
      {path:'showMovieDetails/:id',component:ShowMovieDetailsComponent},
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
  {
    path: 'book/:screen', component: ScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
