import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-dis',
  templateUrl: './button-dis.component.html',
  styleUrls: ['./button-dis.component.css']
})
export class ButtonDisComponent implements OnInit {

  @Input() contador: number = 0;
  @Output() onDis: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public rest(){
    this.contador--;
    this.onDis.emit(this.contador);
  }

}
