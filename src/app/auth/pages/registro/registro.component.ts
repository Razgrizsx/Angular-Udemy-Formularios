import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: "Chris Rizzo",
    }
    )
  }

  nombrePattern: string = '([A-Za-z]+) ([a-zA-Z]+)'
  mailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'

  miFormulario : FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.pattern(this.nombrePattern)]],
    email:['',[Validators.required, Validators.pattern(this.mailPattern)]]
  })

  campoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched
  }

  submit(){
    console.log(this.miFormulario.value)
    this.miFormulario.markAllAsTouched()
  }

}
