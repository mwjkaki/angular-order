import { ErrorStateMatcher } from "@angular/material";
import { AbstractControl } from "@angular/forms";

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: AbstractControl | null): boolean {
        return !!(control && control.invalid && (control.dirty || control.touched));
    }
}

export class BaseForm {
    matcher = new MyErrorStateMatcher();
}