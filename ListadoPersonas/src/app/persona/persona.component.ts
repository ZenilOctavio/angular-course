import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {

  @Input() persona: Persona;
  @Input() index: number;
  
  @Output() personaEliminada = new EventEmitter<number>();

  eliminarPersona(){
    this.personaEliminada.emit(this.index)
  }
}
