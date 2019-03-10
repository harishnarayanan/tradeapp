import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=>InputComponent),
    multi: true
  }]
})
export class InputComponent implements OnInit, ControlValueAccessor {
 
  value: string;
  onChange:() => void;
  onTouched:() => void;
  disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: string): void {
    this.value = value || '';
  }
  registerOnChange(fn: any): void {
    this.onChange= fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched= fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


}
