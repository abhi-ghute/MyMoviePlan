import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './admin/add-movie/add-movie.component';
import { AdminComponent } from './admin/admin.component';
import { ScreenComponent } from './movie/screen/screen.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children:[
      {path:'register',component:RegistrationComponent},
      {path:'login',component:LoginComponent},
    ]
  },
  {
    path: 'admin', component: AdminComponent,
    children:[
      {path:'addMovie',component:AddMovieComponent}
    ]
  },
  {
    path: 'book', component: ScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
