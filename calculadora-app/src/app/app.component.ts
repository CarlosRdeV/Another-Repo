import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación de Calculadora';
  suma:number;
  onSumaRealizada(suma: number){
    this.suma=suma;
  } 


 
}
