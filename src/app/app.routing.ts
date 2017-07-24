import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeocacheFormComponent } from './geocache-form/geocache-form.component';
import { GeocacheListComponent } from './geocache-list/geocache-list.component';
import { GeocacheAddressListComponent } from './geocache-address-list/geocache-address-list.component';
import { PrestigeComponent } from './prestige/prestige.component';

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
      path: 'prestige',
      component: PrestigeComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
