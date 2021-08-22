import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantServiceService } from '../services/restaurant-service.service';

@Component({
  selector: 'app-restaurant-component',
  templateUrl: './restaurant-component.component.html',
  styleUrls: ['./restaurant-component.component.css'],
})
export class RestaurantComponentComponent implements OnInit {
  RestaurantsData: any;
  RestaurantCategories: any = [];
  RestaurantCuisines: any = [];
  restaurantCategoriesSet: any;
  restaurantCusinesSet: any;
  selectedcateogeory: any;
  cateogoryImages: any;
  SearchedData: any;
  sampleimg: any = [
    'https://s3-alpha-sig.figma.com/img/d158/fce0/38794452b26c5775c0b132b9e3f3212b?Expires=1630281600&Signature=OMxXxIo6gdW1iFB~QVMa66QGjYHh4imZ1qsxRo5G4H-5d3i-H~pbw~IrBueCmrrOCvKVc60L~9eMoeJvI2~BjJzflJOWQzMzuXUtMVQjMMjSf7sGYarUsbJcZJsStBh4boBXTf7oP3ZjyXMQQR8R8nddMlrHMoeSddvpQm2LoLBF-soIyK8PIRizvSAEnLBMnRTA0VDSX2Oa~AqiNLG3p2f020BM9gathu2xeC2NdjDIIQ5UV5CHdz5QA~kSdu76pBGu-k9dnbLR1UobnzjE59cF-wgChPs-rhS5oDFy0yPFwmBWM9wDcsmHkeYLkHkox78aYE2xmDw6KW4zsegJ3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/1ef6/eb38/cf3ec032795ecb10eb16dc16778dd30a?Expires=1630281600&Signature=W58gZ3BOtPxM61K9y7M586yvnWdNO4YWIevrsLQHwrURMgEjUnvKZb9GQD842oxMOi8n1HMHo8N29xOrOJOkCRM1-glYT0doOlPCyfmsHE06jv0k-f8kv7sHsfG6qzZN7Nr8KzkKSlk2X-vT4xYpRW6uFtDraCahVTQP6o~LrH3m-F2L7-R0Dxye7xnm95IHl44hKrL-W-gifkoYH2-QjqIEaTOEwaTDkp-i4QA03k2JR4A4t-2s7vgZ--2Wkoscs~ELinCLu4kHwGlWZpxBLsUp4fl38Ho~MENUNhqIns83t153rhCE5cqP9KkQb4VLtQ9G8mUoxObadDf2ymSkoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/ed67/6b00/f08659d96d118604509632b5b9e39c19?Expires=1630281600&Signature=P~t1v4AC498BMOtN3DV1eXYP4oFocm0ITXv8T7jGrgb~kf~yunkg4hM3kGsjx4JEdfNcXnUQ69hfnEOv6OIUIQbT47N46YUzjTi1Kvz4anGtrP0R2HTcwmh1PjiprVl8ibNhvK5Rqxl7Uidbawec7yJ2tONJnQmTQIPYwz3YcGlXO6AVCI3Tk0CQXHXwFTRqMe0D87rUQSWlGfHvzaDhcDXp3wQI7Qh~I0H0WUlt4azEfExcVrHsSoVgAHv4BP~2gG4Nqjm3qbsy-NQsz5E9BRU75KGK7w8YuT5HIb4XVoKinV7q7NzVvv97I71Jpy8-sAE6wDtbOnLv4A24V~-ohA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/617e/8742/80e38f7660e07d68cfe692694cb0aab4?Expires=1630281600&Signature=UNEAlD3m5THwj0tFlqPvKatYgdFaPjd1cZUPV3QOdk1VpyXFNCjvUFVVLiFsDl1HCXqIgggefIIOATPx6Pwu6htmfl7T8tcb1RAsD3P0fjBR44yiDq1IESUh57heZLVK5XRNhcXlHI4ZUXOnYCC0pHm50Q7~M8pkP5myK8jt0RhqLZnw11EmpJyqS5G99ADDj~t18fk54yYuBYUJOODZ15TCPsMHzdKWs8zNBMWzRFBCfVPE98j2QIPZ77EtRsUvWEtVnNwad34vdEbFiM~ZlezUZGxA2UEALUDq-XigBg-klfFjvLl6lv9eZexvePwNpKN9pUrAfM6vUYOBfhrDUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/617e/8742/80e38f7660e07d68cfe692694cb0aab4?Expires=1630281600&Signature=UNEAlD3m5THwj0tFlqPvKatYgdFaPjd1cZUPV3QOdk1VpyXFNCjvUFVVLiFsDl1HCXqIgggefIIOATPx6Pwu6htmfl7T8tcb1RAsD3P0fjBR44yiDq1IESUh57heZLVK5XRNhcXlHI4ZUXOnYCC0pHm50Q7~M8pkP5myK8jt0RhqLZnw11EmpJyqS5G99ADDj~t18fk54yYuBYUJOODZ15TCPsMHzdKWs8zNBMWzRFBCfVPE98j2QIPZ77EtRsUvWEtVnNwad34vdEbFiM~ZlezUZGxA2UEALUDq-XigBg-klfFjvLl6lv9eZexvePwNpKN9pUrAfM6vUYOBfhrDUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  ];
  showMenu: boolean = true;
  openFiltertab = false;
  selectedFilters:any;
  enableFilter=false;
  cuisonesSelected:any=[];
  eb:any;
  randomSearch:any;
  //sortOpen:any;
  @Output() showMenuEvent = new EventEmitter<boolean>();
  constructor(
    private restaurantservice: RestaurantServiceService,
    private route: Router
  ) {
    
   }

  

  ngOnInit(): void {

      this.restaurantservice.SearchedData.subscribe( (searchData)=>
      {
        this.SearchedData=searchData;
      });

    this.restaurantservice.getAllRestaurants().subscribe((data) => {
      console.log('Data got from API is ', data);
      this.RestaurantsData = data?.allRestaurants;
      //console.log('Restaurants Data', this.RestaurantsData);
      this.RestaurantCategories = this.getRestaurantCategory_Cusines(data, 'restaurantCategory');
      this.RestaurantCuisines = this.getRestaurantCategory_Cusines(data, 'restaurantCuisine');

      console.log(this.RestaurantCategories , ' Cusines are:' ,  this.RestaurantCuisines );
      this.restaurantCategoriesSet = new Set(this.RestaurantCategories );
      this.restaurantCusinesSet=new Set( this.RestaurantCuisines);
      // console.log(restaurantSet);
      console.log('Restaurant Categories are', this.restaurantCategoriesSet ,' ANd Restaurant Cusines are ',this.restaurantCusinesSet);
    });

    var searchRestaurant=document.querySelector('.form-control');
    
    // let SearchedData1="";
    // searchRestaurant?.addEventListener('keyup',function(event:KeyboardEvent)
    // {
    //   //alert('searcheddddd'+ this.randomSearch);
     
    //   if (event.code === 'Enter') {
    //     var inputValue = (<HTMLInputElement>document.getElementById('sampless')).value;
    // console.log(inputValue);
    //     //alert('Enter is pressed!');
       
    //     SearchedData1 = inputValue;
    //   console.log(event , 'searched Dta ',SearchedData1 ,' coming from view',this.randomSearch );
    //    // goToSearchPipe(SearchedData1);
    // }
    //   });

      
   let sortclicked=false;

    // (sortOpen)?.addEventListener('click',function()
    // {
    //   sortclicked=true;
    //   const checksortfilter=(<HTMLElement>sortOpen).classList.toggle('newfilter');
    //   console.log('OPen sort filter is',checksortfilter)
    //   if(checksortfilter)
    //   {
    //     this.enableFilter=true;
      
    //   }
    //   else{
    //     this.enableFilter=false;
    //   }
    //   console.log('Enabling filter',this.enableFilter);
    //   // sortclicked= !sortclicked;
    //   // console.log(sortOpen,'status of open Filter clicked', sortclicked);
    //   // if(sortclicked)
    //   // {
    //   // (<HTMLElement>sortOpen).style.color="#FB6D3A";
     
    //   //   this.selectedFilters= (<HTMLElement>sortOpen).textContent;
    //   //   console.log('Selcted Text is ',this.selectedFilters);
    //   //   this.enableFilter=true; 
    //   // }
    //   // else
    //   // {
    //   //   (<HTMLElement>sortOpen).style.color="#182135";
    //   //   this.selectedFilters='';
        
    //   // }


    // });


   
  }


  getRestaurantCategory_Cusines(data: any, typeofRequest: any): any {
    let samplearray = [];
    if (typeofRequest === 'restaurantCategory') {
      for (let i = 0; i < this.RestaurantsData.length; i++) {
        console.log(data?.allRestaurants[i].restaurantCategory);

        if (data?.allRestaurants[i].restaurantCategory.includes(',')) {
          const splittedata =
            data?.allRestaurants[i].restaurantCategory.split(',');

          for (let j = 0; j < splittedata.length; j++) 
          {
            console.log(splittedata[j].replace("[","").replace("]",""));
             samplearray.push(
              splittedata[j]
                .replace('[', '')
                .replace(']', '')
                .replaceAll('"', '')
            );
          }


        }

      }

      return samplearray;
    }
    else {
      for (let i = 0; i < this.RestaurantsData.length; i++) {
        console.log(data?.allRestaurants[i].restaurantCuisine);

        if (data?.allRestaurants[i].restaurantCuisine.includes(',')) {
          const splittedata =
            data?.allRestaurants[i].restaurantCuisine.split(',');

          for (let j = 0; j < splittedata.length; j++) {
            //console.log(splittedata[j].replace("[","").replace("]",""));
             samplearray.push(
              splittedata[j]
                .replace('[', '')
                .replace(']', '')
                .replaceAll('"', '')
            );
          }
        }

      }

      return samplearray;
    }

  }
  ShowCategoryItems(category: any) {
    console.log('Category selected is', category);
    this.selectedcateogeory = category;
  }

  showOrHideMenu() {
    this.restaurantservice.showMenu = !this.restaurantservice.showMenu;
    this.showMenu= this.restaurantservice.showMenu ;
    this.restaurantservice.showMenuSub.next(this.restaurantservice.showMenu);
  }

  goToRestaurantItem(restaurantData: any) {
   // alert(restaurantData);
    this.route.navigate(['/restaurants', restaurantData.id]);
  }

  openFiter() {
    this.openFiltertab = true;
    console.log(this.openFiltertab);
    document.getElementById("mySidepanel").style.width = "400px";
    let s = document.querySelector(".menu-panel");
    (<HTMLElement>document.querySelector(".menu-panel")).style.filter = "blur(5px)";
    (<HTMLElement>document.querySelector(".menu-panel")).style.pointerEvents = "none";
    // console.log((<HTMLElement>s).style.filter="blur(10px)");
    document.getElementById("supermain").style.filter = "blur(5px)";
    
    document.getElementById("supermain").style.pointerEvents = "none";

  }

  closeNavbar() {
   // alert('clicked close button');
    document.getElementById("mySidepanel").style.width = "0px";
    document.getElementById("supermain").style.filter = "blur(0px)";
    document.getElementById("supermain").style.pointerEvents = "auto";


    (<HTMLElement>document.querySelector(".menu-panel")).style.filter = "blur(0px)";
    (<HTMLElement>document.querySelector(".menu-panel")).style.pointerEvents = "auto";
  }

  submittedFilters()
  {
    this.enableFilter=  this.eb ; 
    this.cuisonesSelected;
    console.log('Final CUsines E  Lements are',this.cuisonesSelected, 'and Open Restaurants are',this.enableFilter);
    this.closeNavbar();
  }


  goTOslectedIten(gotData:any)
  {
    //console.log('Data received after selecting FIlter',gotData.target.classList.toggle('newfilter'));
      const checktoggle = gotData.target.classList.toggle('newfilter')
      console.log(checktoggle);
    //console.log(gotData.target.parentElement.classList.toggle('newbackgroundFIlter'));
    if(checktoggle)
    {

      gotData.target.parentElement.classList.toggle('newbackgroundFIlter')
      console.log('Applying FIlter',gotData.target.innerHTML);
      this.cuisonesSelected.push(gotData.target.innerHTML.toString());
    }
    else
    {
      gotData.target.parentElement.classList.toggle('newbackgroundFIlter')
      console.log('ELement Deselected is ',gotData.target.innerHTML ,'and it is present in ',this.cuisonesSelected.includes(gotData.target.innerHTML));
      if(this.cuisonesSelected.includes(gotData.target.innerHTML))
      {
        this.cuisonesSelected.forEach((element,index) => {
          if(element === gotData.target.innerHTML)
          {
            this.cuisonesSelected.splice(index,1);
          }
        });
      }

    }

    
  }


  gotoFIlterByOpen(gotData:any)
  {
    const sss = gotData.target.classList.toggle('newfilter');
    console.log('FIlter Selected',sss);
    if(sss=== true)
    this.eb=true;
    else
    this.eb=false;
  }

  // save(event)
  // {

  //   this.SearchedData = event.target.value;
  //   console.log("You entered: ", event.target.value , 'And the search Pipe is ', this.SearchedData);
  // }

}


