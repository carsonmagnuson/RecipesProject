import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {DataStorageService} from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  // @Output() showEvent = new EventEmitter<string>();

  ngOnInit() {
  }

  constructor(private dataStorageService: DataStorageService) {
  }

  onSaveData() {
    // console.log('data saved');
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  // onNavClick( item: string) {
  //   this.showEvent.emit(item);
  // }

}
