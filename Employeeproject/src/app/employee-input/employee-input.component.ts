import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrl: './employee-input.component.css',
})
export class EmployeeInputComponent {
  departments = ['LD', 'HR', 'JS', 'PHP', 'JAVA'];

  employeeForm: FormGroup;

  constructor() {
    this.employeeForm = new FormGroup({
      _id: new FormControl(),
      empName: new FormControl(),
      deptCode: new FormControl(),
      basicSalary: new FormControl(),
      experience: new FormControl(),
      emailId: new FormControl(),
      joiningDate: new FormControl(),
      secrete_code: new FormControl(),
    });
  }

  get empId() {
    return this.employeeForm.get('_id');
  }
  collectData() {
    console.log(this.employeeForm);
    console.log(this.empId?.value);
  }
}
