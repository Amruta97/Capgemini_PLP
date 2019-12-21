import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { ViewHotelComponent } from './view-hotel/view-hotel.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'addhotel', component: AddHotelComponent },
  { path: 'viewhotel', component: ViewHotelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
