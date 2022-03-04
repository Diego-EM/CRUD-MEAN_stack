import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ApiConnectService } from './services/api-connect.service';

import { AppComponent } from './app.component';
import { PanelSelectionComponent } from './components/panel-selection/panel-selection.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
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
