import { Input } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export const MATCH_PASS : ValidatorFn = (control: AbstractControl): ValidationErrors | null  => {
    
    let password = control.get('password');
    let confirmpassword = control.get('ripetipassword');

    if(password?.value != confirmpassword?.value){

        return {
            passwordmatcherror : true
        }
    }
    
    return null;
}
