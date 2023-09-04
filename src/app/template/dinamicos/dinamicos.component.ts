import { Component } from '@angular/core';

interface Persona{
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito{
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  nuevoJuego: string = ''

  persona : Persona = {
    nombre: "Chris",
    favoritos: [
      {
        id:1,
        nombre: "Metal Gear Solid"
      },
      {
        id:2,
        nombre: "Final Fantasy"
      }
    ]
  }

  guardar(){
    console.log("Formulario Posteado")
  }

  eliminar(i : number){
    this.persona.favoritos.splice(i, 1)
  }
}
