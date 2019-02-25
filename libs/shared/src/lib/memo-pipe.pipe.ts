import { Pipe, PipeTransform } from '@angular/core';
import { default as memo } from 'memo-decorator';

@Pipe({
  name: 'memoPipe'
})
export class MemoPipePipe implements PipeTransform {

  @memo()
  transform(value: any, args?: any): any {
    console.log('memo pipe called', args);
    return value;
  }

}
