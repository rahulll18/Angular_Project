import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css',
})
export class LearningComponent {
  companyName1 = 'Neosoft';
  companyName2 = 'Webwerks';
  companyName = this.companyName2;

  baseLocation = 'Parel';
  initalStatus = false;
  inputType = 'password';

  constructor() {
    setInterval(() => {
      this.companyName = this.companyName1; // company
      this.companyName1 = this.companyName2;
      this.companyName2 = this.companyName; // we are changing model
    }, 3000);
  }

  bindingImage = {
    url: 'https://www.tutorialsstar.com/wp-content/uploads/2021/05/1-Copy-768x406.png',
    height: 200,
    width: 200,
    name: 'Data binding',
  };
  display() {
    if (this.initalStatus) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }

  setCode(node: any) {
    console.log(node.value);
  }
}
