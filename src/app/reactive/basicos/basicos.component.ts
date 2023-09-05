import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  constructor(private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: "Radeon RX 6600 XT",
      precio: 200000
    })
  }

  miFormulario: FormGroup = this.formBuilder.group({
    nombre:['', [Validators.required, Validators.minLength(3)]],
    precio:[0, [Validators.required, Validators.min(0)]],
    existencias:[0, [Validators.required, Validators.min(0)]]
  })

  campoValido(campo: string){
   return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      console.log('Aqui')
      this.miFormulario.markAllAsTouched()
      return;
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset()
  }
/* 
  miFormulario : FormGroup = new FormGroup({
    nombre: new FormControl('Radeon RX 6600 XT'),
    precio: new FormControl(200000),
    existencias: new FormControl(50)
  }) */
}
