import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LearningComponent } from './learning/learning.component';
import { FormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeecardComponent } from './employeecard/employeecard.component';
import { TestchildComponent } from './testchild/testchild.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, LearningComponent, EmployeesComponent, EmployeecardComponent, TestchildComponent],
  imports: [BrowserModule, AppRoutingModule , FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
