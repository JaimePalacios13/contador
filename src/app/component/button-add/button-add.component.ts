import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent implements OnInit {

  @Output() onAdd: EventEmitter<number> = new EventEmitter();
  constructor() { }
  @Input() contador: number = 0;
  ngOnInit(): void {
  }

  public sum(){
    this.contador++;
    this.onAdd.emit(this.contador);
  }
}
