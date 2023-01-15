
# NgInlineSvgG
NgInlineSvgG is lightweight Angular component for inserting svg file inside your template that allow you to change style easily  
# Installation
```bash
npm i ng-inline-svg-g
```
# Usage

just need to add NgInlineSvgGModule to your list of module imports : 
```bash
import { NgInlineSvgGModule } from 'ng-inline-svg-g';

@NgModule({
declarations: [AppComponent],
imports: [BrowserModule, NgInlineSvgGModule],
bootstrap: [AppComponent]
})
class AppModule {}
```
then you can use it in your templates: 

```bash
@Component({
selector: 'app',
template: `
<ng-inline-svg [src]="'/img/image.svg'"></ng-inline-svg>
`
})
export class AppComponent {}
```
