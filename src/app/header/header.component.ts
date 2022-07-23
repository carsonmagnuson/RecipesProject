import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() showEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  constructor() {
  }

  onNavClick( item: string) {
    this.showEvent.emit(item);
  }

}
