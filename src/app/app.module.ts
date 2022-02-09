import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDG8Z4FQOFQ9ddX0INeSaY11MLRTyr-0Xw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
