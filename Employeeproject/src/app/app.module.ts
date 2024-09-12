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

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, LearningComponent, EmployeesComponent, EmployeecardComponent, TestchildComponent, OrderbyPipe, EmployeeInputComponent],
  imports: [BrowserModule, AppRoutingModule , FormsModule , ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
