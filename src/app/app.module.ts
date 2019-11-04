import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './core/app.routing.module';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginAndRegister/login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './loginAndRegister/register/register.component';
import { HeaderComponent } from './layout/header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ViewAppComponent } from './application/viewApplication/viewApplication.component';
import { FooterComponent } from './layout/footer/footer.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import { SetUpResidenceComponent } from './set-up-residence/set-up-residence.component';
import { ViewAppTableComponent } from './view-app-table/view-app-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ViewResiComponent } from './residence/viewResidence/viewResidence.component';
import { SetupResiComponent } from './residence/setupResidence/setupResidence.component';
import { SubmitAppComponent } from './application/submitApplication/submitApplication.component';
import { SetupResiPageComponent } from './page/setupResidencePage/setupResidencePage.component';
import { ViewResiPageComponent } from './page/viewResidencePage/viewResidencePage.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HeaderComponent,
    ViewAppComponent,
    FooterComponent,
    SetUpResidenceComponent,
    ViewAppTableComponent,
    ViewResiComponent,
    SetupResiComponent,
    SubmitAppComponent,
    SetupResiPageComponent,
    ViewResiPageComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule, MDBBootstrapModule.forRoot(),
    MatButtonModule, MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
