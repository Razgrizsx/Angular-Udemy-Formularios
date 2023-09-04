import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  @ViewChild("miFormulario") miFormulario! : NgForm

  initForm = {
    producto: "Radeon RX 6600 XT",
    precio: 200000,
    existencias: 10
  }

  nombreValido(){
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched
  }

  precioValido(){
    return this.miFormulario?.controls['precio']?.invalid && this.miFormulario?.controls['precio']?.touched
  }

  guardar(){
    console.log(this.miFormulario)
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    })
  }
}
