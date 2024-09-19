import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LearningComponent } from './learning/learning.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeecardComponent } from './employeecard/employeecard.component';
import { TestchildComponent } from './testchild/testchild.component';
import { OrderbyPipe } from './custompipes/orderby.pipe';
import { EmployeeInputComponent } from './employee-input/employee-input.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { ViewnotfoundComponent } from './viewnotfound/viewnotfound.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, LearningComponent, EmployeesComponent, EmployeecardComponent, TestchildComponent, OrderbyPipe, EmployeeInputComponent, AdminLoginComponent, HomeComponent, ViewnotfoundComponent],
  imports: [BrowserModule, AppRoutingModule , FormsModule , ReactiveFormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
