import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-testchild',
  templateUrl: './testchild.component.html',
  styleUrl: './testchild.component.css'
})
export class TestchildComponent implements OnInit {
  slogan = "We are not diffrent , We lead by creating diffrence"

  @Output()
  emitter = new EventEmitter<string>()


  ngOnInit(): void {
    this.emitter.emit(this.slogan)
  }
}
