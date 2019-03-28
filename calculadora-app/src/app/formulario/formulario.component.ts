import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() sumaRealizada = new EventEmitter<number>();
  inputOperator1: number;
  inputOperator2: number;
  resultadoOperacion: number;

  constructor() { }

  ngOnInit() {
  }

  onSumar(): void {
    this.resultadoOperacion = this.inputOperator1 + this.inputOperator2;
    this.sumaRealizada.emit(this.resultadoOperacion);
  }

}
