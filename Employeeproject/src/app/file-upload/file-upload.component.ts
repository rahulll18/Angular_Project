import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeCRUDService } from '../customservices/employee-crud.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css',
})
export class FileUploadComponent {
  _id = 0;
  employeePic: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private empcrud: EmployeeCRUDService
  ) {
    const routeParam = activeRoute.snapshot.paramMap.get('_id');
    if (routeParam !== null) {
      this._id = parseInt(routeParam);
    }
  }

  getFile(ev: any) {
    console.log(ev.target.files[0]);
    this.employeePic = ev.target.files[0];
  }

  upload(){
    if(this.employeePic!=undefined){
      const obs=this.empcrud.uploadFile(this._id,this.employeePic)
      obs.subscribe({
        next:(obj:any)=>{
            if(obj.modifiedCount>0)
              window.alert("Image uploaded successfully....");
            else
              window.alert("No change....");
        },
        error:(err)=>{
          console.log(err);
          window.alert("Something went wrong while uploading image....")
        }
      })
    }
  }
}
