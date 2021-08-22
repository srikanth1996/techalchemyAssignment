import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: string, ...trimPara: any): unknown 
  {
    console.log('outside Filter Pipe',trimPara,'array', value);
  
          console.log(value.length);
          let output="";
          if(value.length> 140)
          {
          
            output=  value.substring(0,135)+"...";
            
          }
          return output;
    }

}
