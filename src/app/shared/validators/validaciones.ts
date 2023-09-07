import { FormControl } from "@angular/forms"

export const nombrePattern: string = '([A-Za-z]+) ([a-zA-Z]+)'
export const mailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'

export const noStrider = (control: FormControl) => {
    const value = control.value?.trim().toLowerCase()
    if (value==="strider"){
      return {
        strider: true
      }
    }
    return null
  }