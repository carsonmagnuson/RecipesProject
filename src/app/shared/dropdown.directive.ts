import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // @Input() openState = false;
  // @HostBinding('class.open') openState = false;
  // @HostListener('click') toggleOpen() {
  //   this.openState = !this.openState;
    // if(!this.openState){
    //   this.renderer.addClass(this.elRef.nativeElement, 'open');
    //   this.openState = true;
    // } else {
    //   this.renderer.removeClass(this.elRef.nativeElement, 'open');
    //   this.openState = false;
    // }
  // }
  // @HostListener('focusout') focusout() {
  //   this.openState = false;
  // }

  constructor(private elRef: ElementRef) {
  }

  @HostBinding('class.open') openState = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.openState = this.elRef.nativeElement.contains(event.target) ? !this.openState : false;
  }
}
