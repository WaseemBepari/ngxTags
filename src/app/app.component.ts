import { Component, TemplateRef, ContentChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/* tslint:disable:component-selector */
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tagsForm: FormGroup;
    submitted = false;
  customTagFields = [
    { 'name': 'Brazil', flag: 'http://mbenford.github.io/ngTagsInput/images/flags/Brazil.png', readonly: true },
    { 'name': 'Italy', flag: 'http://mbenford.github.io/ngTagsInput/images/flags/Italy.png', readonly: false },
    { 'name': 'Spain', flag: 'http://mbenford.github.io/ngTagsInput/images/flags/Spain.png', readonly: true },
    { 'name': 'Germany', flag: 'http://mbenford.github.io/ngTagsInput/images/flags/Germany.png' },
  ];
  defaultTags0 = [];
  defaultTags = [
    { 'tagLabel': 'Andhra Pradesh' },
    { 'tagLabel': 'Arunachal Pradesh' },
    { 'tagLabel': 'Assam' }
  ];

  statesTags = [
    { 'tagLabel': 'Andhra Pradesh' },
    { 'tagLabel': 'Arunachal Pradesh' },
    { 'tagLabel': 'Assam' },
    { 'tagLabel': 'Bihar' },
    { 'tagLabel': 'Chhattisgarh' },
    { 'tagLabel': 'Chandigarh' },
    { 'tagLabel': 'Dadra and Nagar Haveli' },
    { 'tagLabel': 'Daman and Diu' },
    { 'tagLabel': 'Delhi' },
    { 'tagLabel': 'Goa' },
    { 'tagLabel': 'Gujarat' },
    { 'tagLabel': 'Haryana' },
    { 'tagLabel': 'Himachal Pradesh' },
    { 'tagLabel': 'Jammu and Kashmir' },
    { 'tagLabel': 'Jharkhand' },
    { 'tagLabel': 'Karnataka' },
    { 'tagLabel': 'Kerala' },
    { 'tagLabel': 'Madhya Pradesh' },
    { 'tagLabel': 'Maharashtra' },
    { 'tagLabel': 'Manipur' },
    { 'tagLabel': 'Meghalaya' },
    { 'tagLabel': 'Mizoram' },
    { 'tagLabel': 'Nagaland' },
    { 'tagLabel': 'Orissa' },
    { 'tagLabel': 'Punjab' },
    { 'tagLabel': 'Pondicherry' },
    { 'tagLabel': 'Rajasthan' },
    { 'tagLabel': 'Sikkim' },
    { 'tagLabel': 'Tamil Nadu' },
    { 'tagLabel': 'Tripura' },
    { 'tagLabel': 'Uttar Pradesh' },
    { 'tagLabel': 'Uttarakhand' },
    { 'tagLabel': 'West Bengal' }
  ];

  constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.tagsForm = this.formBuilder.group({
            defaultTags: [{value:this.defaultTags0, disabled: false}, Validators.required],
            disabledTags: [{value:this.defaultTags, disabled: true}, Validators.required],
            readyOnlyTags: [{value:this.defaultTags, disabled: true}, Validators.required],
            customTagFields: [this.customTagFields, Validators.required],
            editableTagFields: [this.defaultTags, Validators.required],
        });
    }



}
