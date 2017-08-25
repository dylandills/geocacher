import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeocacheFormComponent } from './geocache-form/geocache-form.component';
import { GeocacheListComponent } from './geocache-list/geocache-list.component';
import { GeocacheAddressListComponent } from './geocache-address-list/geocache-address-list.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
{
        path: 'geocache-form',
        component: GeocacheFormComponent
},
{
      path: 'locations',
      component: GeocacheListComponent
},
{
      path: 'addresses',
      component: GeocacheAddressListComponent
},
{
    path: 'about',
    component: AboutComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
