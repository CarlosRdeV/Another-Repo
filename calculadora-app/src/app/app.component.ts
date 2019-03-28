import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Aplicación de Calculadora';
  resultadoOperacion: number;

  onSumaRealizada(resultadoOperacion: number) {
    this.resultadoOperacion = resultadoOperacion;
  }



}
