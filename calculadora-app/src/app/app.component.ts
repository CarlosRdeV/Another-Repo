import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación de Calculadora';
  op1: number;
  op2: number;
  suma: number;

  onSumar(): void {
    this.suma = this.op1 + this.op2;
  }
}
