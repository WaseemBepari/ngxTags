import { Component, Input, HostListener, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { keyCodeConstant } from '../../constants/keyCode';

/* tslint:disable:component-selector */
@Component({
  selector: 'ngx-tag',
  templateUrl: './tag.component.html',
})
export class TagComponent {
  @Input() item;
  @Input() tagLabel: string;
  @Input() index: number;
  @Input() tagEditable: boolean;

  @Output() change = new EventEmitter();
  @ViewChild('tagContent') tagContent: ElementRef;

  get isEditable() {
    return this.tagContent.nativeElement.contentEditable;
  }
  set isEditable(flag: boolean) {
    this.tagContent.nativeElement.contentEditable = flag;
  }

  @HostListener('dblclick', ['$event']) dbclick(e: Event) {
    if(this.tagEditable){
      this.isEditable = true;
    }
  }

  @HostListener('keydown', ['$event']) keydownHandler(event: KeyboardEvent) {
    if (this.isEditable && event.key === keyCodeConstant.ESC) {
      this.toggleEditMode();
    }
  }

  constructor() { }

  toggleEditMode() {
    this.isEditable = !this.isEditable;
  }

  save(e: Event) {
    e.preventDefault();
    const tagText = this.tagContent.nativeElement.innerHTML.trim();
    if (tagText) {
      this.change.emit({ item: tagText, index: this.index });
    }
    this.toggleEditMode();
  }

  blur() {
    this.isEditable = false;
  }

}


