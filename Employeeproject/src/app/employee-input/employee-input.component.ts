import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../customclasses/employee';
import { CustomValidators } from '../customclasses/custom-validators';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeCRUDService } from '../customservices/employee-crud.service';

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrl: './employee-input.component.css',
})
export class EmployeeInputComponent {
  departments = ['LD', 'HR', 'JS', 'PHP', 'JAVA'];

  employeeForm: FormGroup;
  employee = new Employee();

  constructor(
    private activeRoute: ActivatedRoute,
    private empcrud: EmployeeCRUDService,
    private router: Router
  ) {
    console.log(activeRoute);

    const routeParam = activeRoute.snapshot.paramMap.get('_id');
    if (routeParam != null) {
      let _id = parseInt(routeParam);
      this.getEmp(_id);
    }

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

  getEmp(_id: number) {
    const obs = this.empcrud.getEmployeeById(_id);
    obs.subscribe({
      next: (emp) => {
        let jd = emp.joiningDate;
        emp.joiningDate = jd.slice(0, jd.length - 5);
        console.log(emp);
        //this.employeeForm.setValue(emp); // setValue : strict
        this.employeeForm.patchValue(emp); // :not strict
      },
      error: (err) => {
        console.log(err);
        window.alert('something went wrong while searching...');
      },
    });
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
    console.log(this.employeeForm.value);
    this.employee = this.employeeForm.value;
    if (this.activeRoute.snapshot.routeConfig?.path?.includes('addEmployee'))
      this.addEmp();
    else {
      this.updateEmp();
    }
  }

  addEmp() {
    const obs = this.empcrud.addEmployee(this.employee);
    obs.subscribe({
      next: (emp) => {
        //console.log(emp);
        window.alert(`Employee with id ${emp._id} added successfully....`);
        this.router.navigate(['/showEmployees']);
      },
      error: (err) => {
        console.log(err);
        window.alert('something went wrong while adding...');
      },
    });
  }

  updateEmp() {}

  test() {
    console.log(this.basicSalary?.errors);
  }
}
