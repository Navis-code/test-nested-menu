import { Component } from '@angular/core';
import { MenuItem } from './models/MenuItem.model';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuCategories: MenuItem[];

  constructor(private api: ApiService) {
    this.menuCategories = this.api.menuCategories;
  }
}
