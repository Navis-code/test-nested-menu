import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { NestedMenuComponent } from './nested-menu.component';

describe('NestedMenuComponent', () => {
  let component: NestedMenuComponent;
  let fixture: ComponentFixture<NestedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestedMenuComponent],
      imports: [MatMenuModule, MatButtonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NestedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if item has children', () => {
    const item = {
      name: 'Bebidas',
      id: 1,
      parentId: null,
    };
    expect(component.isExpandable(item.id)).toBeTruthy();
  });

  it('should return false if item has no children', () => {
    const item = {
      name: 'Limpieza',
      id: 3,
      parentId: null,
    };
    expect(component.isExpandable(item.id)).toBeFalsy();
  });

  it('should return items by parentId', () => {
    const item = {
      name: 'Bebidas',
      id: 1,
      parentId: null,
    };
    const expected = [{ name: 'Gaseosas', id: 100, parentId: 1 }];
    expect(component.getItemsByParentId(item.id)).toEqual(expected);
  });

  it('should get data by trigger', () => {
    const trigger = 'Sin Alcohol';
    const expected = [
      {
        name: 'Con Azúcar',
        id: 101,
        parentId: 1009,
      },
      {
        name: 'Sin Azucar',
        id: 103,
        parentId: 1009,
      },
    ];
    expect(component.getData(trigger)).toEqual(expected);
  });
});
