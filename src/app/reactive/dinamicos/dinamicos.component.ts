import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  constructor(private formBuilder : FormBuilder){}

  nuevoFavorito : FormControl = this.formBuilder.control('', [Validators.required])

  miFormulario : FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([["Metal Gear Solid"], ["Final Fantasy"]], Validators.required)
  })

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray 
  }


  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return
    }
    this.favoritosArr.push( this.formBuilder.control(this.nuevoFavorito.value, Validators.required) )
    this.nuevoFavorito.reset()
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset()
  }
}
