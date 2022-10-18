import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { WhoOneComponent } from './who-one/who-one.component';
import { WhoTwoComponent } from './who-two/who-two.component';
import { HomeInterfaceComponent } from './home-interface/home-interface.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { PricingComponent } from './pricing/pricing.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { MastheadComponent } from './masthead/masthead.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    WhoOneComponent,
    WhoTwoComponent,
    HomeInterfaceComponent,
    WhatWeDoComponent,
    WhoAreWeComponent,
    PricingComponent,
    CaseStudiesComponent,
    MastheadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
