import { NgModule } from '@angular/core';

import {
  CheckboxWrapperComponent,
  CheckboxLabelDirective,
  CheckboxDirective,
} from './checkbox';
import {
  RadioWrapperComponent,
  RadioLabelDirective,
  RadioDirective,
} from './radio';
import { TooltipComponent, TooltipDirective } from './tooltip';
import { ButtonDirective } from './button';
import { AnchorDirective } from './anchor';
import { DialogComponent } from './dialog';
import { CardComponent } from './card';

const ATOMS = [
  CheckboxWrapperComponent,
  CheckboxLabelDirective,
  RadioWrapperComponent,
  RadioLabelDirective,
  CheckboxDirective,
  TooltipDirective,
  TooltipComponent,
  DialogComponent,
  ButtonDirective,
  AnchorDirective,
  RadioDirective,
  CardComponent,
];

@NgModule({ imports: ATOMS, exports: ATOMS })
export class AtomsModule {}
