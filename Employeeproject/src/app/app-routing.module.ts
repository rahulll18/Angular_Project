import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeInputComponent } from './employee-input/employee-input.component';
import { EmployeesComponent } from './employees/employees.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewnotfoundComponent } from './viewnotfound/viewnotfound.component';
import { HomeComponent } from './home/home.component';
import { LearningComponent } from './learning/learning.component';
import { authGuard } from './guards/Authguard';
import { leaveView } from './guards/leaveview';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'learning',
    component: LearningComponent,
  },
  {
    path: 'adminLogin',
    component: AdminLoginComponent,
  },
  {
    path: 'addEmployee',
    component: EmployeeInputComponent,
    // canActivate: [authGuard],
    // canDeactivate: [leaveView],
  },
  {
    path: 'editEmployee/:_id',
    component: EmployeeInputComponent,
  },
  {
    path: 'showEmployees',
    component: EmployeesComponent,
  },
  {
    path: '**',
    component: ViewnotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
