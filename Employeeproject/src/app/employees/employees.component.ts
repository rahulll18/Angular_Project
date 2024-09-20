import { Component } from '@angular/core';
import { Employee } from '../customclasses/employee';
import { EmployeeCRUDService } from '../customservices/employee-crud.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  // cardcolor= 'gray';
  // employees: Employee[] = [
  //   new Employee(
  //     1,
  //     'John Doe',
  //     'IT',
  //     50000,
  //     5,
  //     'john.doe@example.com',
  //     'john.jpg',
  //     Employee.getDateTimeLocal(new Date('2019-01-15'))
  //   ),
  //   new Employee(
  //     2,
  //     'Jane Smith',
  //     'HR',
  //     60000,
  //     7,
  //     'jane.smith@example.com',
  //     'jane.jpg',
  //     Employee.getDateTimeLocal(new Date('2018-05-23'))
  //   ),
  //   new Employee(
  //     3,
  //     'John Doe',
  //     'IT',
  //     50000,
  //     5,
  //     'john.doe@example.com',
  //     'john.jpg',
  //     Employee.getDateTimeLocal(new Date('2019-01-15'))
  //   ),
  //   new Employee(
  //     4,
  //     'Jane Smith',
  //     'HR',
  //     60000,
  //     7,
  //     'jane.smith@example.com',
  //     'jane.jpg',
  //     Employee.getDateTimeLocal(new Date('2018-05-23'))
  //   ),
  //   new Employee(
  //     5,
  //     'John Doe',
  //     'IT',
  //     50000,
  //     5,
  //     'john.doe@example.com',
  //     'john.jpg',
  //     Employee.getDateTimeLocal(new Date('2019-01-15'))
  //   ),
  // ];

  employees: Employee[] = [];
  allEmployees: Employee[] = [];
  errorMessage = '';

  constructor(private empcrud: EmployeeCRUDService) {}

  ngOnInit(): void {
    this.getEmps();
  }

  getEmps() {
    const obs = this.empcrud.getAllEmployees();
    obs.subscribe({
      next: (emps) => {
        //console.log(emps);
        this.employees = emps;
        this.allEmployees = this.employees;
      },
      error: (err) => {
        console.log(err);
        window.alert('something went wrong getting employees...');
      },
    });
  }
  deleteEmployee(_id: number) {
    const ans = confirm('Do you really want to delete?');
    if (ans) {
      const obs = this.empcrud.deleteEmployeeById(_id);
      obs.subscribe({
        next: (obj) => {
          console.log(obj);
          window.alert('Employe deleted successfully....');
          this.getEmps();
        },
        error: (err) => {
          console.log(err);
          window.alert('something went wrong deleting employee...');
        },
      });
    }
  }

  searchEmployee(emp_name: string) {
    console.log('search query :' + emp_name);
    if (emp_name !== '') {
      const obs = this.empcrud.getEmployeesByName(emp_name);

      obs.subscribe({
        next: (emps) => {
          if (emps.length > 0) {
            console.log(emps);
            this.employees = emps;
          } else {
            this.errorMessage = 'NOT FOUND';
          }
        },

        error: (err) => {
          console.log(err);

          window.alert('something went wrong searching employee...');
        },
      });
    } else {
      this.errorMessage="";
      this.employees = this.allEmployees;
    }
  }
}
