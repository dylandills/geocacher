import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeocacheFormComponent } from './geocache-form/geocache-form.component';

const appRoutes: Routes = [
{
  path: '',
  component: GeocacheFormComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
