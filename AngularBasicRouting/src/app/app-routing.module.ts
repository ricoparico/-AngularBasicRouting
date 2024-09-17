import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { LandinpageComponent } from './component/landinpage/landinpage.component';

const routes: Routes = [
  {path: "", component: HomepageComponent },
  {path: "login", component: LoginComponent },
  {path: "signup", component: SignupComponent },
  {path: "landinpage", component: LandinpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
