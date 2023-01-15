import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'ng-inline-svg',
  template: `<i [style.font-size]="fontSize" [innerHTML]="svgIcon$ | async"></i>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgInlineSvgGComponent implements OnInit {
  @Input() src!: string;
  svgIcon$!: Observable<any>;
  fontSize!: string
  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    if (!this.src) {
      this.svgIcon$ = of(null);
      return;
    }
    this.svgIcon$ = this.httpClient.get(this.src, { responseType: 'text' })
      .pipe(map(value => this.sanitizer.bypassSecurityTrustHtml(value)))
  }
}
