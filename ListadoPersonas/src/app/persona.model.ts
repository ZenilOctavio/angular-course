export class Persona{

  constructor(public nombre: string, public apellido: string){}

  nombreCompleto(){
    return `${this.nombre} ${this.apellido}`
  }
}