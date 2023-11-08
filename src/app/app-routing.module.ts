import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { PiecesComponent } from './pieces/pieces.component';
import { AxisComponent } from './axis/axis.component';
import { JustifyComponent } from './justify/justify.component';
import { AlignComponent } from './align/align.component';
import { FlexComponent } from './flex/flex.component';
import { OtherStuffComponent } from './other-stuff/other-stuff.component';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
  {
    path: 'intro',
    component: IntroComponent
  },
  {
    path: 'pieces',
    component: PiecesComponent
  },
  {
    path: 'axises',
    component: AxisComponent
  },
  {
    path: 'justify',
    component: JustifyComponent
  },
  {
    path: 'align',
    component: AlignComponent
  },
  {
    path: 'flex',
    component: FlexComponent
  },
  {
    path: 'other',
    component: OtherStuffComponent
  },
  {
    path: 'exercise',
    component: ExerciseComponent
  },
  {
    path: '**',
    component: IntroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
