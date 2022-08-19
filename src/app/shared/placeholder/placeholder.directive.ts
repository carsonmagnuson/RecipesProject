import {Directive, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[appPlaceholder]'
})
export class PlaceholderDirective {  // deprecated way of handling dynamic components, can just use *ngIf

  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
