import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rubrumAlpha';
  item = 'recipes';

  updateItem(newItem: string){
    this.item = newItem;
  }
}
