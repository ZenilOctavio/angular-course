import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Persona } from './persona.model';
import { PersonaComponent } from './persona/persona.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PersonaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListadoPersonas';
  error = false
  personas: Persona[] = [new Persona('Victor', 'Rivera')]

  agregarPersona(event: Event, nombre:string, apellido:string){
    event.preventDefault()
    if(nombre.length == 0) return
    if(apellido.length == 0) return

    this.personas.push(new Persona(nombre, apellido))
  }

  eliminarPersona(index: number){
    this.personas.splice(index, 1)
  }
}
