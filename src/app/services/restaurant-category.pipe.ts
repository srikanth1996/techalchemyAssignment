import { ValueTransformer } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restaurantCategory',
  pure:false
})
export class RestaurantCategoryPipe implements PipeTransform {
  transform(value: any, ...args: any): any {
    console.log(args, 'selected FIlter', args[1]?.length);
    if (!args[0] && !args[1] && args[2].length===0 && !args[3]) {
      console.log('inside First pipe ')
      return value;
    } else if (args[0]?.length > 0) {
      let output = [];
      // console.log('selected category is',args);
      for (let i = 0; i < value.length; i++) {
        //console.log(value[i],' and restaurant cateogeries are' ,value[i].restaurantCategory.includes(args));
        if (value[i].restaurantCategory.includes(args[0])) {
          if (args[1] && args[1].length > 0) {
            if (value[i].isOpen) {
              output.push(value[i]);
            }
          } else {
            output.push(value[i]);
          }
        }
      }
      return output;
    } else {
      if (args[1].length > 0) 
      {

        console.log('values in', value, ' arguments are', args[1]);
        let output1 = [];
        for (let k = 0; k < value.length; k++) {
          if (value[k].isOpen) 
          {
            let insidefilter=value[k];
            if(args[2].length>0)
            {
                for(let q=0;q<args[2].length;q++)
                {
                        if(value[k].restaurantCuisine.includes(args[2][q]))
                      {
                        if(!output1.includes(value[k]))
                        output1.push(value[k]);
                      }
                  
                }
            }
            else
            output1.push(value[k]);
          }
        }

        console.log('After Applying FIlters', output1);
        return output1;
      }
      if(args[2].length > 0)
      {
        let output2 = [];
          console.log('Argument 2 ',args[2], ' main array is ',value);
          for(let s=0;s<args[2].length;s++)
          {
            console.log('ELement :',args[2][s]);
            for(let s1=0;s1<value.length;s1++)
            {
                 if(value[s1].restaurantCuisine.includes(args[2][s]))
                 {
                   if(!output2.includes(value[s1]))
                  output2.push(value[s1]);
                 }

                }
             
          }

          return output2;

      }

      if(args[3].length>0)
      {
         // console.log('Searched Data is',args[3]);
          let output4=[];
          
           for(let r=0;r<value.length;r++)
           {
              if(value[r].restaurantName.search(args[3])!=-1)
              {
                console.log(value[r].restaurantName.search(args[3]))
                output4.push(value[r]);

              }
           }

           return output4;
      }
    }
  }
}
