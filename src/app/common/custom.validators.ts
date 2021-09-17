import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {

    static numbersOnly(): ValidatorFn{
        let regExp: RegExp = /^[0-9]+$/;
    
        return (control: AbstractControl): {[key:string]: any} | null => {
            const numbersOnly = regExp.test(control.value);
    
            return !numbersOnly ? { 'numbersOnly' : {value: control.value}} : null;
        };
  }

}
  