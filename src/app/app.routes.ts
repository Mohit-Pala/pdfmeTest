import { Routes } from '@angular/router';
import { PdfDesigner } from './pdf-designer/pdf-designer';
import { PdfThing } from './pdf-thing/pdf-thing';

export const routes: Routes = [
  { path: '', component: PdfThing },
  { path: '**', redirectTo: '' }
];
