import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { AboutUsModule } from '../about-us/about-us.module';
import { ProductsSelectionModule } from '../products-selection/products-selection.module';
import {NavbarModule} from '../navbar/navbar.module'
import { ContactModule } from '../contact/contact.module';
import { FooterModule } from '../footer/footer.module';
import { NavLoginModule } from '../nav-login/nav-login.module';



@NgModule({
  declarations: [HomeComponent,HeaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AboutUsModule,
    ProductsSelectionModule,
    NavbarModule,
    ContactModule,
    FooterModule,
    NavLoginModule,
  ]
})
export class HomeModule { }
