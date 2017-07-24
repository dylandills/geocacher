import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GeocacheFormComponent } from './geocache-form/geocache-form.component';
import { GeocacheAddressListComponent } from './geocache-address-list/geocache-address-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GeocacheFormComponent,
    GeocacheAddressListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
