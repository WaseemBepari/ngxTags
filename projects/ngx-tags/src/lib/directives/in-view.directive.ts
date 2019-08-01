import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

/* tslint:disable:directive-selector */
@Directive({
  selector: '[InView]'
})
export class InViewDirective implements OnChanges {
  @Input() InView;
  private dropdown: HTMLElement = this.el.nativeElement.closest('.dropdown');

  constructor(private el: ElementRef) { }

  ngOnChanges(values) {
    if (values.InView.currentValue) {
      this.setInView();
    }
  }

  setInView() {
    const dropdown: HTMLElement = this.el.nativeElement.closest('.dropdown');
    const currentPos = this.el.nativeElement.offsetTop;
    const dropdownScrollPos = dropdown.scrollTop;
    const dropdownHeight = dropdown.offsetHeight;
    const elHeight = this.el.nativeElement.offsetHeight;
    if ((currentPos + elHeight) > (dropdownScrollPos + dropdownHeight)) {
      dropdown.scrollTop = currentPos;
    } else if (dropdownScrollPos > currentPos) {
      dropdown.scrollTop = currentPos;
    }
  }
}
