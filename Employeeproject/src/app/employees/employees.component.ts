import { Component } from '@angular/core';
import { Employee } from '../customclasses/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  employees: Employee[] = [
    new Employee(1, 'John Doe', 'IT', 50000, 5, 'john.doe@example.com', 'john.jpg', new Date('2019-01-15')),
    new Employee(2, 'Jane Smith', 'HR', 60000, 7, 'jane.smith@example.com', 'jane.jpg', new Date('2018-05-23')),
    new Employee(3, 'John Doe', 'IT', 50000, 5, 'john.doe@example.com', 'john.jpg', new Date('2019-01-15')),
    new Employee(4, 'Jane Smith', 'HR', 60000, 7, 'jane.smith@example.com', 'jane.jpg', new Date('2018-05-23')),
    new Employee(5, 'John Doe', 'IT', 50000, 5, 'john.doe@example.com', 'john.jpg', new Date('2019-01-15'))
  ];
}
