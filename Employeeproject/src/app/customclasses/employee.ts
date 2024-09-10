export class Employee {
    _id: number;
    empName: string;
    deptCode: string;
    basicSalary: number;
    experience: number;
    emailId: string;
    employee_pic: any;
    joiningDate: Date;
  
    constructor(
      _id: number = 0,
      empName: string = "",
      deptCode: string = "",
      basicSalary: number = 0,
      experience: number = 0,
      emailId: string = "",
      employee_pic:any="",
      joiningDate: Date = new Date()
    ) {
      this._id = _id;
      this.empName = empName;
      this.deptCode = deptCode;
      this.basicSalary = basicSalary;
      this.experience = experience;
      this.emailId = emailId;
      this.employee_pic = employee_pic;
      this.joiningDate = joiningDate;
    }
  }
  
