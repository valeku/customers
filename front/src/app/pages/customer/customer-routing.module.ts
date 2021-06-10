import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerPage } from './customer.page';

const routes: Routes = [
  {
    path: ':id',
    component: CustomerPage
  },
  {
    path: ':id/:edit',
    component: CustomerPage
  },
  {
    path: '',
    component: CustomerPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerPageRoutingModule {}
