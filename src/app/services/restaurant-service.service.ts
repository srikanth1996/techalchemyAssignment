import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantServiceService {
  showMenu: boolean = true;
  showMenuSub = new Subject<boolean>();
  SearchedData= new Subject<string>();
  constructor(private httpclient: HttpClient) {}

  menuItems: any = {
    allmenus: [
      {
        id: '1',
        name: 'Burger Mania',
        updatedDate: '2014-06-25T00:00:00.000Z',
        demo: true,
        menu: [
          {
            name: 'chicken Grill',
            price: '$20',
            imageurl:
              'https://s3-alpha-sig.figma.com/img/8592/051d/e5fae7eaf53cc9545120894a7d22989e?Expires=1630281600&Signature=b5IrrPIZRQOJsBtWgUgVBliEYsB8rdtcEm9~V7Ma-3x-rX3YitgSWSNhVFv1oAcQWx-141RYCpZ9eDlEq9bJO2~SgaEl5QOMryE8IT--opVxW9CPUbSLpw8rIOUITc9y0xJoUuKkPRcDUtl2UTbhMHraiPg1mWL0JLlJkZdcphBEbeHx4HdIQ0MVImpdYjYX4NcWhqr1aqcVYJ4q6k0hr1-AQ2cRt8ntypLtdmX1qca93RnWn2tbT0VlThzjqw0uJ3bLyd5fw~FUUmN2B5gy1Qk-9FbUeCCzPat298wmPQnAZtheYpTCfGcXfPcoI-fEhBnUoRUBj9F9ZlEVA8eXqA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'Hot Dish',
          },
          {
            name: 'chicken Fried Rice',
            price: '$40',
            imageurl:
              'https://s3-alpha-sig.figma.com/img/a542/34e9/46e9e9a85bb0bcfa8c4c836d6a26122a?Expires=1630281600&Signature=BDCC~q6c14~CfZPvbj1sDk2qd-nIip4BN8tMiGznfOPuUGvWGts5-L2aflngOWSuEHd-SPtwPmqR5i6G368527QmyHo~AmweipZ~UL0AGJKjb4i0GF2aIWSZdHwaUELfUb6-iPrU7J7huKsyBWDEAea1NKt70VyP51iktHDXlx9p1OTU4~oZX0gvYZ1TsA99mK5Dwr~xQlsutInkUAvs-nJUsrSjMo3zXOEAsohP-0fYdrMWwmml0TSRv3XxZmthv2mqLtEnUx6AZoN5hjTf2kZAtIPahvHuDOk49JgwGsERtiVkzGyhKtcHA4wtW63XYngT2lfHxDUb67d~ZWKP~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'Baked',
          },
        ],
      },
      {
        id: '2',
        name: 'Posh Pizza Hut',
        updatedDate: '2014-06-25T00:00:00.000Z',
        demo: true,
        menu: [
          {
            name: 'chicken Pizza',
            price: '$20',
            imageurl:
              'https://s3-alpha-sig.figma.com/img/8e0f/2d8b/b38b1a5ec7466c561f813a2be22d679b?Expires=1630281600&Signature=BUoW95k5FpjeJfVnTp8D8JXP8YdHv8791G~xRgqft3~J2ykO3w8shOQDRShJokHcDjFw19Yan8sIvEO-vUB5gQoFniuWSmFNffEtE8wJMc3jzoMPArXVrjc2Ze3cfiZSL~AU0magr2TQgwkPknp7JTvrd9kw6T8vOhe890utqabIDVRKyCJi7BQp1fdqJgGDS2q5Sn4lkOLPjlaPpnueiIfL-1PWdjDfM4mTFXlduQVn~CI1tPue6ZB3gtJ8UE67d5b2mwwy7nB8v-sm1uMKwUNiQRc06ZyaxgxS1z4rhNZo7qDgf4hXMu1YEw0hcwW2HECl17trUrXKfPBkazqD-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'Fast Food',
          },
          {
            name: 'chicken Burger',
            price: '$10',
            imageurl:
              'https://s3-alpha-sig.figma.com/img/f488/f750/e68941bad48fefed834a82628db59ff2?Expires=1630281600&Signature=YD6wssKI-uU4I9ghOrGwErRYnE1PDJbdGPEg3sb~-pYDCD8z28c7OfNHdb501~Sq~fh7MrdN5kyN1R0nFJJUgPvXZF1PIvOaKJss0SrrHobTvFelbUC3Qij5-c9Z-9uV2Q6UVBEbBc1vHPuIAtlsUR6ORxsZMGdYTFIEr~H26vfre8g-oHEngT2L5jjVhP5r2W2iO9IAjRCP3jWbtGJ9yWDXcuOLBJG2inFRH-wv51Hh6QbyFRY~7PtHZ0DYLeaaevNrwnIlotCI47q-bK4rBqYhPEqpf4DPi1fLJg0z3Fj1qy7PZJJXRLzpJ1sS68NfWA4g~mwZSWb6F5BbRdQwig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'Fast Food',
          },
          {
            name: 'veg Salad',
            price: '$5',
            imageurl:
              'https://s3-alpha-sig.figma.com/img/1c9b/2553/cc934003784dc28e77859c2e3cff0637?Expires=1630281600&Signature=ObqBqD19EDTufIlG~wHP2iqJARSrnVsYp4NHNBX~3rF1ztFc8VCIC45vTuMJycSVjJYoaipyRvQ5zlxX0z-itg-SQOaak2xsVaVcMrWhtnzkBftxc9AYB7AK954UiS6XPkyDEEQCMWBTdyt0lW2uGCPuJm-WN3EqM4JMlyymOt1WIsbVSUbS2PILLEpZJCBOiYC5aKvqRh7WTnQ5XrjWXGJomt-hImidoS~1LKaEfTdpDZFLCSV0TiOg9p~E8StE~WaJjsXGe2UrijtR0EUhVE2icHoziv4aAvOvmPOoTrOLIFF0ZwZGuK7yhNrwvGjzgFf5kyu-igp17mpfRgg4OA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'Snack',
          },
        ],
      },
    ],
  };

  getMenuItems() {
    return this.menuItems;
  }

  getAllRestaurants(): Observable<any> {
    return this.httpclient.get(
      'https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants'
    );
  }

  getRestaurantDetails()
  {
    return this.httpclient.get('https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails/');
  }
}
