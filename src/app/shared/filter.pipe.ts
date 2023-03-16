import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'filter'
})
export class FilterPipe implements PipeTransform {
//pass array of the product to value

  transform(value : any[], filterString: string, propName:string): any[]{
    const result:any =[];
    if(!value || filterString ==='' || propName ===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }
}
