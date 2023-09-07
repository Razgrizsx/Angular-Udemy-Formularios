import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

public nombrePattern: string = '([A-Za-z]+) ([a-zA-Z]+)'
public mailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'


noStrider = (control: FormControl) : ValidationErrors | null => {
  const value = control.value?.trim().toLowerCase()
  if (value==="strider"){
    return {
      strider: true
    }
  }
  return null
}

camposIguales(campo1:string, campo2:string) {

  return (formGroup: AbstractControl) : ValidationErrors | null => {

    const pass = formGroup.get(campo1)?.value
    const pass2 = formGroup.get(campo2)?.value

    if(pass !== pass2){
      formGroup.get(campo2)?.setErrors({noIguales: true})
      return {noIguales: true}
    }
    formGroup.get(campo2)?.setErrors(null)
    return null
  }
}
}
