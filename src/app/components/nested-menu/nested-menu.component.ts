import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.css'],
})
export class NestedMenuComponent implements OnInit {
  @Input() data: MenuItem[] = [];
  @Input() trigger = 'Trigger';
  @Input() isRootNode = false;

  internalData: MenuItem[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    if (!!this.data?.length) {
      this.data = this.data.filter((item) => item.parentId === null);
    } else {
      this.internalData = this.api.menuCategories;
    }
  }

  isExpandable(itemId: number): boolean {
    return this.api.menuCategories.some((item) => item.parentId === itemId);
  }

  getData(trigger: string) {
    const [item] = this.internalData.filter((item) => item.name === trigger);
    return (this.data = this.getItemsByParentId(item.id));
  }

  getItemsByParentId(id: number): MenuItem[] {
    return this.internalData.filter((item) => item.parentId === id);
  }
}
