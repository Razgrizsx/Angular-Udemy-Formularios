import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { mailPattern, noStrider, nombrePattern } from 'src/app/shared/validators/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  constructor(private fb : FormBuilder, private validatorService : ValidatorService, private emailValidator : EmailValidatorService){}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: "Chris Rizzo",
      email: "test1@test.com",
      username: "Razgriz"
    }
    )
  }

  get errorMsg(): string{
    const error = this.miFormulario.get("email")?.errors
    if(error?.["required"]) {
      return 'Email obligatorio'
    }else if(error?.["pattern"]){
      return 'Email no tiene el formato correcto'
    }else if(error?.["emailTomado"]){
      return 'Email ya existe'
    }else{
      return ''
    }
  }

  miFormulario : FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.pattern(this.validatorService.nombrePattern)]],
    email:['',[Validators.required, Validators.pattern(this.validatorService.mailPattern)], [this.emailValidator]],
    username:['',[Validators.required, this.validatorService.noStrider]],
    password:['', [Validators.required, Validators.minLength(6)]],
    password2:['', [Validators.required]]
  },{
    validators: [this.validatorService.camposIguales('password', "password2")]
  })

  campoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched
  }

  /* emailRequired(){
    return this.miFormulario.get('email')?.errors?.['required'] && this.miFormulario.get('email')?.touched
  }

  emailFormato(){
    return this.miFormulario.get('email')?.errors?.['pattern'] && this.miFormulario.get('email')?.touched
  }

  emailTomado(){
    return this.miFormulario.get('email')?.errors?.['emailTomado'] && this.miFormulario.get('email')?.touched

  } */

  submit(){
    console.log(this.miFormulario.value)
    this.miFormulario.markAllAsTouched()
  }

}
