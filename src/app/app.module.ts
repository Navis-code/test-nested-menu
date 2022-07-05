import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NestedMenuComponent } from './components/nested-menu/nested-menu.component';
import { ApiService } from './services/api.service';

const MATERIAL_MODULES = [MatMenuModule, MatButtonModule];

@NgModule({
  declarations: [AppComponent, NestedMenuComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ...MATERIAL_MODULES],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
