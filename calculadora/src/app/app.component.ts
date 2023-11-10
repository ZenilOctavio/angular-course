import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  resultado = ''

  sumar(event: Event, cadena1: string, cadena2: string){
    event.preventDefault()
    
    let numero1 = Number(cadena1)
    let numero2 = Number(cadena2)

    try{
      this.resultado = `El resultado es: ${numero1 + numero2}`
    }
    catch(err){
      this.resultado = 'No introduciste valores válidos'
    }
  }
}
