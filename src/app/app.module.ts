import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { PiecesComponent } from './pieces/pieces.component';
import { AxisComponent } from './axis/axis.component';
import { JustifyComponent } from './justify/justify.component';
import { AlignComponent } from './align/align.component';
import { FlexComponent } from './flex/flex.component';
import { OtherStuffComponent } from './other-stuff/other-stuff.component';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PiecesComponent,
    AxisComponent,
    JustifyComponent,
    AlignComponent,
    FlexComponent,
    OtherStuffComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
