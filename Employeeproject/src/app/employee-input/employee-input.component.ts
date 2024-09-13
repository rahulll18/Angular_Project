import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../customclasses/employee';
import { CustomValidators } from '../customclasses/custom-validators';

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrl: './employee-input.component.css',
})
export class EmployeeInputComponent {
  departments = ['LD', 'HR', 'JS', 'PHP', 'JAVA'];

  employeeForm: FormGroup;
  employee = new Employee();
  constructor() {
    this.employeeForm = new FormGroup(
      {
        _id: new FormControl(this.employee._id, [Validators.required]),
        empName: new FormControl(this.employee.empName, [
          Validators.required,
          Validators.pattern('[A-Za-z ]*'),
          Validators.minLength(2),
        ]),
        deptCode: new FormControl(this.employee.deptCode, [
          Validators.required,
        ]),
        basicSalary: new FormControl(this.employee.basicSalary, [
          Validators.required,
          Validators.min(0),
        ]),
        experience: new FormControl(this.employee.experience, [
          Validators.required,
          Validators.min(0),
          Validators.max(85),
        ]),
        emailId: new FormControl(this.employee.emailId, [
          Validators.required,
          Validators.email,
        ]),
        joiningDate: new FormControl(this.employee.joiningDate, [
          Validators.required,
        ]),
        secrete_code: new FormControl(this.employee.secrete_code, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(6),
        ]),
        c_secrete_code: new FormControl(''),
      },
      [CustomValidators.valueMatch('secrete_code', 'c_secrete_code')]
    );
  }

  get empId() {
    return this.employeeForm.get('_id');
  }

  get _id() {
    return this.employeeForm.get('_id'); // returing FormControl object
  }
  get empName() {
    return this.employeeForm.get('empName'); // returing FormControl object
  }
  get basicSalary() {
    return this.employeeForm.get('basicSalary'); // returing FormControl object
  }
  get experience() {
    return this.employeeForm.get('experience'); // returing FormControl object
  }
  get emailId() {
    return this.employeeForm.get('emailId'); // returing FormControl object
  }
  get deptCode() {
    return this.employeeForm.get('deptCode'); // returing FormControl object
  }
  get secrete_code() {
    return this.employeeForm.get('secrete_code'); // returing FormControl object
  }
  get c_secrete_code() {
    return this.employeeForm.get('c_secrete_code'); // returing FormControl object
  }

  collectData() {
    console.log(this.employeeForm);
    console.log(this.employeeForm.value);
    //i want data of only id
    console.log(this.employeeForm.value._id);
    //i want data of only id via FormControl
    //console.log(this.employeeForm.controls._id.value.controls._id.value);
    console.log(this.emailId?.value);
  }
}
