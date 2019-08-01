import { Component, OnInit, Input, OnChanges, HostBinding,
  TemplateRef, HostListener, Output, ViewEncapsulation, OnDestroy } from '@angular/core';
import { keyCodeConstant } from '../../constants/keyCode';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';

/* tslint:disable:component-selector */
@Component({
  selector: 'ngx-tags-dropdown',
  templateUrl: './dropdown.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent implements OnInit, OnChanges, OnDestroy {
  public _focusIndex = -1;
  private navKey$ = new Subject();
  private destroy$ = new Subject();
  index:number;

  @Input() items;
  @Input() tagLabel;
  @Input() inputTag;
  @Input() dropdownItemTemplate: TemplateRef<any>;


  @Output() select = new EventEmitter();


  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.navKey$.next(event);
  }


  constructor() { }

  ngOnInit() {
    this.navDropdown();
    this.selectOnEnter();
  }

  ngOnChanges(change) {
    if (change.items) {
      this._focusIndex = 0;
    }
  }

  selectOnEnter() {
    this.navKey$
      .pipe(
        map((e: KeyboardEvent) => e.key),
        filter((key: string) => this.items && this.items.length),
        filter((key: string) => key === keyCodeConstant.ENTER),
        takeUntil(this.destroy$)
      )
      .subscribe((key: string) => {
        this.emitSelectedItem(this.items[this._focusIndex], this._focusIndex);
      });
  }

  navDropdown() {
    this.navKey$
      .pipe(
        map((e: KeyboardEvent) => e.key),
        filter((key: string) => this.items && this.items.length),
        filter((key: string) => key === keyCodeConstant.DOWN || key === keyCodeConstant.UP),
        takeUntil(this.destroy$)
      )
      .subscribe((key: string) => {
        if (this.items.length) {
          let tempFocusIndex = 0;
          if (key === keyCodeConstant.DOWN) {
            tempFocusIndex = this._focusIndex + 1;
            tempFocusIndex = (tempFocusIndex === this.items.length) ? 0 : tempFocusIndex;
          } else if (key === keyCodeConstant.UP) {
            tempFocusIndex = this._focusIndex - 1;
            tempFocusIndex = (tempFocusIndex === -1) ? this.items.length - 1 : tempFocusIndex;
          }
          this._focusIndex = tempFocusIndex;

        }

      });
  }

  emitSelectedItem(item, index) {
    this.select.emit({ key: index, value: item });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
