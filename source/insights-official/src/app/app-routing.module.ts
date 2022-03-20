
import { AppRoutesStrings } from './utilities/app-constants';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './layout/home-page/home-page.component';
import { MainPageComponent } from './layout/main-page/main-page.component';

import { AboutUsComponent } from './layout/main-page/about-us/about-us.component';
import { OurValuesComponent } from './layout/main-page/our-values/our-values.component';
import { CustomersComponent } from './layout/main-page/customers/customers.component';
import { ContactsComponent } from './layout/main-page/contacts/contacts.component';
import { ServicesPageComponent } from './layout/main-page/services-page/services-page.component';

const routes: Routes = [
  {
    path: AppRoutesStrings.home,
    component: HomePageComponent,
    data: { showLogo: false }
  },
  {
    path: AppRoutesStrings.main,
    component: MainPageComponent,
    data: { showLogo: false },
    children: [
      {
        path: '',
        component: AboutUsComponent,
        data: { showLogo: true }
      },
      {
        path: AppRoutesStrings.about,
        component: AboutUsComponent,
        data: { showLogo: true }
      },
      {
        path: AppRoutesStrings.values,
        component: OurValuesComponent,
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
