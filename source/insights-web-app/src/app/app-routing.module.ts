import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './layout/home-page/home-page.component';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { ServicesPageComponent } from './layout/services-page/services-page.component';
import { CustomersComponent } from './layout/customers/customers.component';
import { ContactsComponent } from './layout/contacts/contacts.component';

const AppRoutesStrings = {
  home: '',
  about: 'about',
  services: 'services',
  customers: 'customers',
  contact: 'contact',
}

const routes: Routes = [
  {
    path: AppRoutesStrings.home,
    component: HomePageComponent,
    data: { showLogo: false }
  },
  {
    path: AppRoutesStrings.about,
    component: AboutUsComponent,
    data: { showLogo: true }
  },
  {
    path: AppRoutesStrings.services,
    component: ServicesPageComponent,
    data: { showLogo: true }
  },
  {
    path: AppRoutesStrings.customers,
    component: CustomersComponent,
    data: { showLogo: true }
  },
  {
    path: AppRoutesStrings.contact,
    component: ContactsComponent,
    data: { showLogo: true }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
