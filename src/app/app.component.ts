import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from './services/restaurant-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'techalchemyAssignment';
  showMenu: boolean;

  constructor(private resServ: RestaurantServiceService) {}

  ngOnInit(): void {
    this.showMenu = this.resServ.showMenu;
    this.resServ.showMenuSub.subscribe((res) => (this.showMenu = res));
  }
}
