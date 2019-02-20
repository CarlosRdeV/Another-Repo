import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() sumaRealizada = new EventEmitter<number>();
  op1: number;
  op2: number;
  suma: number;
  
  constructor() { }

  ngOnInit() {
  }

  onSumar(): void {
    this.suma=this.op1+this.op2;
    this.sumaRealizada.emit(this.suma);  
  }

}
