import { Injectable } from '@angular/core';
import { MenuItem } from '../models/MenuItem.model';
import { CATEGORIES_MOCK } from './menuCategories.mock';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  menuCategories: MenuItem[] = CATEGORIES_MOCK;

  constructor() {}
}
