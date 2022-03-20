import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainPageComponent } from './layout/main-page/main-page.component';
import { NavBarComponent } from './layout/main-page/nav-bar/nav-bar.component';
import { ServicesPageComponent } from './layout/main-page/services-page/services-page.component';
import { CustomersComponent } from './layout/main-page/customers/customers.component';
import { ContactsComponent } from './layout/main-page/contacts/contacts.component';
import { AboutUsComponent } from './layout/main-page/about-us/about-us.component';
import { OurValuesComponent } from './layout/main-page/our-values/our-values.component';

import { HomePageComponent } from './layout/home-page/home-page.component';
import { CanvasComponent } from './layout/home-page/canvas/canvas.component';

import { RouteManagerService } from './services/route-manager.service';
import { EmailService } from './services/email/email.service';

@NgModule({
  declarations: [
    AppComponent,
    
    HomePageComponent,
    NavBarComponent,
    ServicesPageComponent,
    CustomersComponent,
    ContactsComponent,
    AboutUsComponent,
    OurValuesComponent,

    MainPageComponent,
    CanvasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    RouteManagerService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
