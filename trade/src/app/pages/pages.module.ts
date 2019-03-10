import { SharedModule } from '../components/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const pageRoutes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  declarations: [HomepageComponent, CheckoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class PagesModule { }
