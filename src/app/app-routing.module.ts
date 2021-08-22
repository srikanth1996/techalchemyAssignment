import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RestaurantComponentComponent } from './restaurant-component/restaurant-component.component';
import { RestaurantItemComponent } from './restaurant-component/restaurant-item/restaurant-item.component';

const routes: Routes = [
  
  {
    path:'home', component:RestaurantComponentComponent
  },
 {
   path:'restaurants',component:RestaurantComponentComponent
 },
 {
  path:'restaurants/:id',component:RestaurantItemComponent
},
{
  path:'',redirectTo: 'restaurants',pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
