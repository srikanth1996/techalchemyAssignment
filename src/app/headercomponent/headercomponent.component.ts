import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from '../services/restaurant-service.service';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {
  showMenu: boolean = true;
  SearchedData: any;
  constructor(private restaurantservice:RestaurantServiceService) { }

  ngOnInit(): void {
  }

  showOrHideMenu() {
    this.restaurantservice.showMenu = !this.restaurantservice.showMenu;
    this.showMenu= this.restaurantservice.showMenu ;
    this.restaurantservice.showMenuSub.next(this.restaurantservice.showMenu);
  }

  openFiter() {
    document.getElementById("mySidepanel").style.width = "400px";
    let s = document.querySelector(".menu-panel");
    (<HTMLElement>document.querySelector(".menu-panel")).style.filter = "blur(5px)";
    (<HTMLElement>document.querySelector(".menu-panel")).style.pointerEvents = "none";
    // console.log((<HTMLElement>s).style.filter="blur(10px)");
    document.getElementById("supermain").style.filter = "blur(5px)";
    
    document.getElementById("supermain").style.pointerEvents = "none";

  }

  save(event)
  {

    this.SearchedData = event.target.value;
    console.log("You entered: ", event.target.value , 'And the search Pipe is ', this.SearchedData);
    this.restaurantservice.SearchedData.next(this.SearchedData);
  }

}
