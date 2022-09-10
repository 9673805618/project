import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AddRequestComponent } from './components/employee/add-request/add-request.component';
import { ViewExistingRequestComponent } from './components/employee/view-existing-request/view-existing-request.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginMenuComponent } from './components/login-menu/login-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddRequestComponent,
    ViewExistingRequestComponent,
    EmployeeComponent,
    LoginMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
