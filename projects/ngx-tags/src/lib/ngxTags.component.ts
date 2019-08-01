import { Component, ViewEncapsulation, TemplateRef, Input, EventEmitter, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxTagsValueAccessor } from './ngxTagsValueAccessor';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* tslint:disable:component-selector */
@Component({
  selector: 'ngx-tags',
  templateUrl: './ngxTags.component.html',
  styleUrls: ['./ngxTags.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgTagComponent),
    multi: true
  }],
  encapsulation: ViewEncapsulation.None

})
export class NgTagComponent extends NgxTagsValueAccessor {
  public isMenuOpen = false;
  public _options: Observable<{}> | Array<any>;
  public inputTag = '';
  public placeholder = 'add a tag';
  public actionTypes = {
    'add': 'add',
    'delete': 'delete',
    'update': 'update',
  };

  public get tags() {
    return this._value;
  }

  @Input() tagTemplate: TemplateRef<any>;
  @Input() dropdownItemTemplate: TemplateRef<any>;
  @Input() options: any;
  @Input() maxTags: number;
  @Input() tagLabel = 'tagLabel';
  @Input() tagValue = 'tagValue';
  @Input() removeLastOnBackspace: boolean;
  @Input() canDeleteTags: boolean;
  @Input() canAddTags: boolean;
  @Input() clearOnBlur = true;
  @Input() allowDupes = false;
  @Input() onlyFromDropdown = false;
  @Input() tagEditable = false;

  @Output() public change = new EventEmitter<any>();

  constructor() {
    super();
  }


  whenClickedOut() {
    this.isMenuOpen = false;
  }


  enter(e) {
    if (this.onlyFromDropdown) {
    e.stopProgation();
      return false;
    }
    if (this.inputTag.trim()) {
      this.addToModal(this.inputTag);
      this.clearInput();
    }
  }
  save($event) {
    this._value[$event.index][this.tagLabel] = $event.item.trim();
    this.emitChange(this.actionTypes.update, this._value[$event.index]);
  }

  blur() {
    if (this.clearOnBlur) { this.clearInput(); }
  }

  clearInput() {
    this.inputTag = '';
  }

  del(indx: number) {
    if (this.canDeleteTags) {
      this._value.splice(indx, 1);
      this.emitChange(this.actionTypes.delete, this._value);
    }
  }

  backspace() {
    if (!this.removeLastOnBackspace && !this.inputTag.trim()) {
      this._value.pop();
    }
  }

  input() {
    const _inputTag = this.inputTag.trim();
    if (_inputTag) {
      this._options = this.filterByInput(this.options);
      this.isMenuOpen = true;
    }
  }

  private filterByInput(items) {
    return items.filter((item) => {
      const val = (typeof item !== 'string' && this.tagLabel) ? item[this.tagLabel] : item;
      if (val.toLowerCase().includes(this.inputTag.trim().toLowerCase())) {
        return true;
      }
      return false;
    });
  }

  select(item) {
    this.addToModal(item.value);
    this.clearInput();
    this.whenClickedOut();
  }

  private addToModal(item) {
    if (this.hasReachedMaxTags()) {
      return;
    }
    const itemToAdd = this.createTag(item);
    if (!this.allowDupes) {
      if (this.isDuplicate(itemToAdd)) {
        this._value.push(itemToAdd);
        this.emitChange(this.actionTypes.add, itemToAdd);
      }
    } else {
      this._value.push(itemToAdd);
      this.emitChange(this.actionTypes.add, itemToAdd);
    }
  }

  private createTag(tag) {
    if (typeof tag !== 'string') {
      return tag;
    } else {
      return {
        [this.tagValue]: tag,
        [this.tagLabel]: tag
      };
    }
  }

  hasReachedMaxTags() {
    return this.maxTags ? (this.maxTags === this._value.length) : false;
  }

  isDuplicate(item) {
    return this._value.indexOf(item) === -1 ? true : false;
  }
  private emitChange(type: string, value: any) {
    this.change.emit({ type: type, value: value });
  }
}
