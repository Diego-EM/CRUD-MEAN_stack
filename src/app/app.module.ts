import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScrollDivComponent } from './components/scroll-div/scroll-div.component';

import { ApiConnectService } from './services/api-connect.service';
import { PanelSelectionComponent } from './components/panel-selection/panel-selection.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollDivComponent,
    PanelSelectionComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
