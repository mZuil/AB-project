import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AListItemsComponent } from './a-list-items/a-list-items.component';
import { BListItemsComponent } from './b-list-items/b-list-items.component';

@NgModule({
  declarations: [
    AppComponent,
    AListItemsComponent,
    BListItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
