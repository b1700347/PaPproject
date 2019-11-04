import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent} from '../user/user.component';
import { LoginComponent} from '../loginAndRegister/login/login.component';
import { RegisterComponent } from '../loginAndRegister/register/register.component';
import { ViewAppComponent } from '../application/viewApplication/viewApplication.component';
import { HeaderComponent } from '../layout/header/header.component';
import { SetupResiComponent } from '../residence/setupResidence/setupResidence.component';
import { ViewResiComponent } from '../residence/viewResidence/viewResidence.component';
import { SubmitAppComponent } from '../application/submitApplication/submitApplication.component';
import { SetupResiPageComponent } from '../page/setupResidencePage/setupResidencePage.component';
import { ViewResiPageComponent } from '../page/viewResidencePage/viewResidencePage.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: '', component: LoginComponent },
  { path : 'register', component : RegisterComponent},
  { path: 'viewApplication', component: ViewAppComponent },
  { path: 'submitApplication', component: SubmitAppComponent},
  { path: 'header', component: HeaderComponent },
  { path: 'header/:userID', component: HeaderComponent },
  { path: 'setupResidence', component: SetupResiComponent},
  { path: 'setupResidencePage', component: SetupResiPageComponent},
  { path: 'viewResidence', component: ViewResiComponent},
  { path: 'viewResidencePage', component: ViewResiPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
