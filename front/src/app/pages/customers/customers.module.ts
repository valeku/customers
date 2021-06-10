import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomersPageRoutingModule } from './customers-routing.module';

import { CustomersPage } from './customers.page';
import { SideMenuPageModule } from 'src/app/side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersPageRoutingModule,
    SideMenuPageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CustomersPage]
})
export class CustomersPageModule {}
