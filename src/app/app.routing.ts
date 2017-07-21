import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { GeocacheDetailComponent } from './geocache-detail/geocache-detail.component';
import { GeocacheListComponent } from './geocache-list/geocache-list.component';
import { NewGeocacheComponent } from './new-geocache/new-geocache.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'add-new-geocache',
    component: NewGeocacheComponent
  },
  {
    path: 'geocaches',
    component: GeocacheListComponent
  },
  {
    path: 'geocaches/:$key',
    component: GeocacheDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
