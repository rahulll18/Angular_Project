import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static match(control: AbstractControl<any, any>): ValidationErrors | null {
    // console.log(control);
    // how to get 2 form control
    //  console.log(control.get('secrete_code')?.value);
    //  console.log(control.get('c_secrete_code')?.value);
    const secrete_code = control.get('secrete_code')?.value;
    const c_secrete_code = control.get('c_secrete_code')?.value;
    if (secrete_code != c_secrete_code) return { match: true };
    else return null;
  }

  static valueMatch(control1: string, control2: string): ValidatorFn {
    return (control: AbstractControl) => {
      const value1 = control.get(control1)?.value;
      const value2 = control.get(control2)?.value;
      if (value1 != value2) return { valuematch: true };
      else return null;
    };
  }

  static mailAccount(account: string): ValidatorFn {
    return (control: AbstractControl) => {
      // console.log("control:",control);
      const value = control.value;
      if (!value.substring(value.indexOf('@')).includes(account))
        return { mailaccount: true };
      else return null;
    };
  }
}
