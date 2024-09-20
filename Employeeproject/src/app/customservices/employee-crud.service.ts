import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../customclasses/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeCRUDService {
  url = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url + '/employees/add', employee);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + '/getEmployees');
  }
  getEmployeeById(_id: number): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/getEmployees/' + _id);
  }

  getEmployeesByName(emp_name: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + '/getbyname/' + emp_name);
  }

  deleteEmployeeById(_id: number): Observable<Object> {
    return this.http.delete<Object>(this.url + '/delete/' + _id);
  }

  uploadFile(_id: number, employeePic: any): Observable<Object> {
    let formData = new FormData();

    formData.append('employeePic', employeePic);

    return this.http.put<Object>(this.url + '/uploadpic/' + _id, formData);
  }
}
