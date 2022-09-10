import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRequestComponent } from './components/employee/add-request/add-request.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { ViewExistingRequestComponent } from './components/employee/view-existing-request/view-existing-request.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "verifyuser", component: LoginComponent },
  { path: "employee", component: EmployeeComponent },
  { path: "addrequestpage", component: AddRequestComponent },
  { path: "viewexistingrequest", component: ViewExistingRequestComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
