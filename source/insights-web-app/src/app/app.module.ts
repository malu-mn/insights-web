import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';
import { NavBarComponent } from './layout/header/nav-bar/nav-bar.component';


import { ServicesPageComponent } from './layout/services-page/services-page.component';
import { CustomersComponent } from './layout/customers/customers.component';
import { ContactsComponent } from './layout/contacts/contacts.component';
import { AboutUsComponent } from './layout/about-us/about-us.component';

import { FooterComponent } from './layout/footer/footer.component';
import { HomePageComponent } from './layout/home-page/home-page.component';
import { CanvasComponent } from './layout/home-page/canvas/canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    NavBarComponent,
    
    HomePageComponent,
    ServicesPageComponent,
    CustomersComponent,
    ContactsComponent,
    AboutUsComponent,

    FooterComponent,

    CanvasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
