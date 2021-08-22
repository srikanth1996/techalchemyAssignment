import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {
  id: number;
 datarecieved:any;
 restaurantDetail:any;
 openingHours:string;
 items:any;
 menuItems:any;
 individualMenu:any;
 AllCategoriesOnMenu:any=[];
  constructor(private restaurantservice:RestaurantServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.route.paramMap.subscribe((params: Params) => {
     
      this.id = params.get('id');
      console.log( 'ID receieved from Parent is',params.get('id'));
    });


    this.restaurantservice.getRestaurantDetails().subscribe((data1:any)=>
    {
    this.datarecieved = data1?.restaurantDetails;
      console.log('Data Recived from Individual Restaurant Details',this.datarecieved);

     for(var j=0;j<this.datarecieved.length;j++)
     {
       console.log(this.datarecieved[j].id.toString(),' and ID is',this.id.toString().replace("\"", ''));
        if(this.datarecieved[j].id.toString()===this.id)
        {
           
          this.restaurantDetail = this.datarecieved[j];
          console.log('Data Got from ID is',this.restaurantDetail);

         this.openingHours= this.restaurantDetail.openingHours;

         console.log(this.openingHours);
        
         var addp= document.createElement("p");
          this.items = this.openingHours.split(','); 

          console.log('Opening Hours', this.items );
      addp.innerHTML = "Sample";
         
      console.log(addp, '' , (document.querySelector('.main_container')));
      //document.getElementsByClassName("opening").item.;
        

      //Fetching MenuItems
      this.FetchMenuItems();

        }
        
        
     }
    });


    

  }

FetchMenuItems()
{
  this.menuItems = this.restaurantservice.getMenuItems();
console.log(this.menuItems.allmenus);

  for(let i=0;i<this.menuItems.allmenus.length;i++)
  {
    if(this.menuItems.allmenus[i].name === this.restaurantDetail.restaurantName)
    {
      console.log('Found Element with Menu Items',this.menuItems.allmenus[i].menu);
      
      this.individualMenu=this.menuItems.allmenus[i].menu;


      console.log('Complete Menu Items are', this.individualMenu);
      for(let j=0;j< this.individualMenu.length;j++)
      {
        console.log(' Menu Categories are',this.individualMenu[j].category);
        this.AllCategoriesOnMenu.push(this.individualMenu[j].category);
        console.log('All Menu Categories are',this.AllCategoriesOnMenu);
      }

    }
  }
}
}
