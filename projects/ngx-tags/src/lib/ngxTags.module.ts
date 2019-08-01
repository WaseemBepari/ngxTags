import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgTagComponent } from './ngxTags.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { TagComponent } from './components/tag/tag.component';
import { CloseMenuDirective } from './directives/close-menu.directive';
import { InViewDirective } from './directives/in-view.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ NgTagComponent, DropdownComponent, TagComponent, CloseMenuDirective, InViewDirective],
  exports: [NgTagComponent]
})
export class NgxTagsModule { }
