import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {url} from './validator';
const URL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => UrlValidator),
  multi: true
};
@Directive({
  selector: '[url][formControlName],[url][formControl],[url][ngModel]',
  providers: [URL_VALIDATOR]
})
export class UrlValidator implements Validator{
  validate(control: AbstractControl): { [key: string]: any } {
    return url(control);
  }
}