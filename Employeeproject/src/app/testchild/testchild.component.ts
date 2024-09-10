import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-testchild',
  templateUrl: './testchild.component.html',
  styleUrl: './testchild.component.css'
})
export class TestchildComponent {
  slogan = "We are not diffrent , We lead by creating diffrence"

  @Output()
  emitter = new EventEmitter<string>()

   pass() {
    this.emitter.emit(this.slogan)
  }
}
