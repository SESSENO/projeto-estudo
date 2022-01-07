import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercicioUmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
