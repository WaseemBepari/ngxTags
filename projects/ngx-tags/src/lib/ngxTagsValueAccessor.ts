import { ControlValueAccessor } from '@angular/forms';
const noop = () => {};

export class NgxTagsValueAccessor implements ControlValueAccessor {
  public onTouchedCallback: () => void = noop;
  public onChangeCallback: (_: any) => void = noop;
  public _value: any = [];
  disabled:boolean;

  get value(): any {
    return this._value;
  }

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
    }
  }

  writeValue(value: any) {
    if (value !== this._value) {
      this._value = value;
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState( isDisabled : boolean ) : void {
    this.disabled = isDisabled;
  }
}
