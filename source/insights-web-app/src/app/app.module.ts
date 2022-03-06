import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './layout/nav-bar/nav-bar.component';


import { ServicesPageComponent } from './layout/services-page/services-page.component';
import { CustomersComponent } from './layout/customers/customers.component';
import { ContactsComponent } from './layout/contacts/contacts.component';
import { AboutUsComponent } from './layout/about-us/about-us.component';

import { FooterComponent } from './layout/footer/footer.component';
import { HomePageComponent } from './layout/home-page/home-page.component';
import { CanvasComponent } from './layout/home-page/canvas/canvas.component';
import { MainPageComponent } from './layout/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    
    
    HomePageComponent,
    NavBarComponent,
    CanvasComponent,

    ServicesPageComponent,
    CustomersComponent,
    ContactsComponent,
    AboutUsComponent,

    FooterComponent,

    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
