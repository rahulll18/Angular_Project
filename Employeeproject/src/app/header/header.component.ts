import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  heading1 = "Managament"
  heading2 = "CRUD"
  heading = this.heading2;

  constructor(){
    setInterval(()=>{
      this.heading = this.heading1;
      this.heading1 = this.heading2;
      this.heading2 = this.heading;
    } , 1500)
  }
}
