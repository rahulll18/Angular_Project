import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../customclasses/employee';

@Component({
  selector: 'app-employeecard',
  templateUrl: './employeecard.component.html',
  styleUrl: './employeecard.component.css'
})
export class EmployeecardComponent implements OnChanges {
  @Input() //for data sharing from parent
  employee = new Employee();

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Data received from parent component")
  }
}
