import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regularPipe'
})
export class RegularPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('regular pipe called', args);
    return value;
  }

}
