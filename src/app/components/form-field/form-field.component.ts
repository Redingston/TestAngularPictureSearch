import { Component, Input, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { IFormField } from 'src/Model/IFormField';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldComponent),
      multi: true
    }
  ]
})
export class FormFieldComponent implements ControlValueAccessor {

  @Input() field: IFormField;

  constructor() { }
  
  writeValue(value: any): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange = (value: any) : any => {};
  onTouched = () : any => {};
}
