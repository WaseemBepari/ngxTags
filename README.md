# NgxTags




# Installation

To install this library, run:

```bash
$ npm install ngx-tags --save
```


  
## Consuming the library

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { NgxTagsModule} from 'ngx-tags';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the library as an import
    NgxTagsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use it in your code

```xml
...
<ngx-tags [options]="statesTags" [maxTags]="4" [(ngModel)]="defaultTags" [removeLastOnBackspace]="true" [canDeleteTags]="true" [canAddTags]="true" [allowDupes]="true" [onlyFromDropdown]="true"></ngx-tags>
...
```


## API
| Key     | Default | Remarks |
|------   |------|------|
| `ngModel` |N/A|The variable you wish to bind your tags to. Must be an Array|
| `removeLastOnBackspace` |`false`|Boolean indicating that you can remove the last tag in the row when you press backspace in the input area when it is empty |
| `canDeleteTags` |`true`| Boolean indicating wether tags can be removed or not |
| `allowDupes` |`false`| Boolean indicating weather tags can be duplicated |
| `canAddTags` |`true`| Boolean indicating wether tags can be added or not |
| `placeholder` |`'add a tag'`| Placeholder text to display when not tags are present |
| `tagTemplate` |N/A| pass the ngtemplate to render for each tag input |
| `dropdownItemTemplate` |N/A| pass the ngtemplate to render for each dropdown item |
| `maxTags` |N/A| maximum number tags allowed to select |
| `onlyFromDropdown` |false| only avail selection from the dropdown |
| `clearOnBlur` |true| clear input when blured out |
| `options` |N/A| should be Array of  objects |
| `tagLabel` |`'tagLabel'`| Name of the property to show in the dropdown,tag |
| `readonly` | false | set tag to ready-only, should be added as prop to tag object |
|`minLengthBeforeOptions`|`1`| The length of the typed string before the dropdown is shown. Putting this to `0` will display it on focus |
| `change` |N/A|Will be called when a change is made to the tags `$event` will have the following structure: `{type: 'add', tag: {}}` where `type` can be `add` , `remove` , `delete` or`update` |


## Development

### Build the library

```bash
$ ng build ngx-tags
```

### Run the demo app

```bash
$ ng serve
```

## License

MIT © [Waseem Bepari ](waseem.bepari@gmail.com)