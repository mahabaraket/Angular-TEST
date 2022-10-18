import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { HomeInterfaceComponent } from './home-interface/home-interface.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { WhoOneComponent } from './who-one/who-one.component';
import { WhoTwoComponent } from './who-two/who-two.component';

const routes: Routes = [
  { path : 'home' , component: HomeInterfaceComponent},
  { path : 'who-One' , component: WhoOneComponent},
  { path : 'who-Two' , component: WhoTwoComponent},
  { path : 'what-we-do' , component: WhatWeDoComponent},
  { path : 'who-are-we' , component: WhoAreWeComponent},
  { path : 'cases' , component: CaseStudiesComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
