import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponentComponent } from './restaurant-component/restaurant-component.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

import { RestaurantCategoryPipe } from './services/restaurant-category.pipe';
import { FormsModule } from '@angular/forms';
import { RestaurantItemComponent } from './restaurant-component/restaurant-item/restaurant-item.component';
import { SwitchingComponentComponent } from './switching-component/switching-component.component';
import { CommonModule } from '@angular/common';
import { FilterpipePipe } from './services/filterpipe.pipe';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponentComponent,
    RestaurantCategoryPipe,
    RestaurantItemComponent,
    SwitchingComponentComponent,
    MenuBarComponent,
    FilterpipePipe,
    HeadercomponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
