import {Component, EventEmitter, OnDestroy, OnInit, Output} from "@angular/core";
import {DataStorageService} from "../shared/data-storage.service";
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  collapsed = true;
  private userSub: Subscription;
  // @Output() showEvent = new EventEmitter<string>();

  ngOnInit() {
    this.userSub = this.authService.user.subscribe( user => {
      this.isAuthenticated = !!user; //same as  '!user ? false : true'
    });
  }

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {
  }

  onSaveData() {
    // console.log('data saved');
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  // onNavClick( item: string) {
  //   this.showEvent.emit(item);
  // }

}
