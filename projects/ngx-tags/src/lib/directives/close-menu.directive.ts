import { Directive, HostListener, ElementRef, Output, EventEmitter, Input } from '@angular/core';

/* tslint:disable:directive-selector */
@Directive({
  selector: '[closeMenu]'
})
export class CloseMenuDirective {
  @Output() whenClickedOut = new EventEmitter();
  @Input() closeMenu: boolean;
  @HostListener('document:mouseup', ['$event']) onMouseUp(e: Event) {
    if (this.closeMenu) { this.isOutside(e); }
  }
  constructor(private $elem: ElementRef) { }

  isOutside(e: Event) {
    if (!this.$elem.nativeElement.contains(event.target) && this.$elem.nativeElement.style.display !== 'none') {
      this.whenClickedOut.emit();
    }
  }
}
